///<reference path="../../dts/misc-types-extend.d.ts" />
import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import {
    InfoOverlay,
    CaseSelector,
} from "../../modules/UI/Overlay";
import { Vector2 } from "three";
import * as HeightFunctions from "../../resources/catalogs/misc/heightFunctions";
import { projectGeoData, ptsListHeighFn } from "../../modules/Geo/GeoTools";
import { TextBox } from "../../modules/Geo/UI/input";
import { CanvasOverlay } from "../../modules/Heightmap/UI/canvas";
import { requestText } from "../../common/misc";
// import csvDataset from "../../resources/assets/dataset/csvdata.txt";

const W = 512;
const H = 512;
let geoFunc = (v: Vector2) => 0;  // dummy func until set later
const PLOTFUNCS: any = { ...HeightFunctions, geoFunc };
const ALL_CASES = [...Object.keys(PLOTFUNCS)];


export default ({ args }: any) => {
    const [currCase, setCurrCase] = useState(0);
    const [data, setData] = useState("placeholder");
    const {sampleName, sampleDesc, csvFileUrl} = args;

    const selectCase = ALL_CASES[currCase]
    const currFunc = PLOTFUNCS[selectCase]

    const onCaseChange = (caseId: any) => {
        console.log("switch to case " + caseId);
        // setCurrCase(parseInt(caseId));
    };

    const handleSubmit = (evt: ChangeEvent, txt: string) => {
        evt.preventDefault();
        const data = JSON.parse(txt);
        plotGraph(data);
    }

    const plotGraph = async (inputData: any) => {
        const pts = await projectGeoData(inputData);
        let geoFunc = ptsListHeighFn(pts); // generate HeightFunc from geodata list
        PLOTFUNCS['geoFunc'] = geoFunc; // update geoFunc in HEIGHTFUNC catalog
        // force refresh
        // setCurrCase(0);
        // setCurrCase(currCase);
    }

    useEffect(() => {
        (async () => {
          const csvData: any = await requestText(csvFileUrl);
          setData(csvData);  
        })();
    }, [])

    // compute the height arr that will fill canvas
    const arr: any = Array(W * H).keys();
    const heightArr = [...arr]
        .map((elt, i) => new Vector2(i % W, Math.floor(i / W)))
        .map(pt => currFunc(pt));
    // .map(v2 => 0.25 + noise(v2) / 2);

    return (
        <>
            <InfoOverlay sampleName={sampleName} sampleDesc={sampleDesc} />
            {/* <CaseSelector items={ALL_CASES} current={currCase} onSelect={onCaseChange}/> */}
            <TextBox handleSubmit={handleSubmit} val={data} />
            <CanvasOverlay width={W} height={H} pointsBuff={heightArr} />
        </>
    );
};
