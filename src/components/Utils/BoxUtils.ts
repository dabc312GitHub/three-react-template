import { Box3, Vector3 } from 'three';

export class BoxSplitter {

    rejected = [];
    static rejected: any;

    static checkValidity(combination: any[], targetVol: number) {
        var volume = combination.reduce((sizeSum: number, box: Box3) => {
            var size = new Vector3();
            box.getSize(size);
            return sizeSum + size.x * size.y * size.z;
        }, 0);
        if (Math.round(volume) === Math.round(targetVol)) {
            return combination;
        }
        else {
            // console.log("Discard volume");
            // store.dispatch({ type: "DEBUG", subtype: "STORE_VAL", key: "boxCombination", val: grp });
            if (!this.rejected) this.rejected = [];
            if (BoxSplitter.checkDuplicate(combination, this.rejected)) {
                this.rejected.push(combination);
            }
            return null;
        }
    }

    static makeCombinations(combination: any[],
        candidates: any[],
        volumeTarget: any,
        level: number): Box3[] | null {
        var valid = candidates.filter((box: any) => {
            // remove overlapping boxes
            var index = combination.findIndex((box2: Box3) => {
                return box2.containsBox(box) || box2.clone().expandByScalar(-0.01).intersectsBox(box);
            });
            return index === -1;
        });
        if (valid && valid.length) {
            var validBoxes: Box3[] | null = [];
            var validBox = valid.find((box: any, i: any) => {
                // if(level <= 2) console.log("level "+level+" testing box "+i+"/"+valid.length);
                validBoxes = BoxSplitter.makeCombinations([...combination, box], valid, volumeTarget, level + 1);
                return validBoxes !== null;
            });
            return validBox ? [validBox, ...validBoxes] : null;
        } else if (this.checkValidity(combination, volumeTarget)) {
            return [];  // working case
        } else {
            return null;    // non working case
        }
    }

    static checkIntersections(intersectBox: Box3) {
        var size = new Vector3(0);
        intersectBox.getSize(size);
        // intersects only if all size are not null
        return Math.min(...size.toArray());
    }

    static checkDuplicate(combination: any[], combinationArr: any[]) {
        var duplicate = combinationArr.find((combin2: any[]) => {
            var dupe = true;
            combination.forEach((box: any) => {
                var found = combin2.find((box2: { equals: (arg0: any) => any; }) => { return box2.equals(box) });
                dupe = dupe && found;
            });
            return dupe;
        })
        return !duplicate;
    }

    // getBoxSplitLayout
    static split(box: Box3, intersectBoxes: Box3[]) {
        // check inputs
        var notOverlapping = intersectBoxes.filter(overlapBox => !box.intersectsBox(overlapBox));
        if (notOverlapping.length) {
            console.log("NOT all boxes are overlapping => don't go further");
            return [];
        } else {
            var boxPtsArr = [box, ...intersectBoxes].map((box) => {
                var pts = [];
                pts.push(box.min.clone());
                pts.push(new Vector3(box.max.x, box.min.y, box.min.z));
                pts.push(new Vector3(box.max.x, box.min.y, box.max.z));
                pts.push(new Vector3(box.min.x, box.min.y, box.max.z));
                pts.push(new Vector3(box.min.x, box.max.y, box.min.z));
                pts.push(new Vector3(box.max.x, box.max.y, box.min.z));
                pts.push(box.max.clone());
                pts.push(new Vector3(box.min.x, box.max.y, box.max.z));
                return pts;
            });

            var boxPts: Vector3[] = boxPtsArr.flat().reduce((arr: Vector3[], p: Vector3) => {
                var index = arr.findIndex((p2: any) => { return p.equals(p2) });
                if (index === -1) return [...arr, p];
                else {
                    arr.splice(index, 1);
                    return arr;
                }
            }, []);
            var boxes: Box3[] = [];
            boxPts.forEach((p, i) => {
                var candidates = boxPts.slice(i).filter((p2) => {
                    return (p.x !== p2.x && p.y !== p2.y && p.z !== p2.z);
                });
                candidates.forEach((p2) => {
                    var box = new Box3();
                    box.expandByPoint(p);
                    box.expandByPoint(p2);
                    var invalid = intersectBoxes.find((box2: Box3) => {
                        return box.intersectsBox(box2.clone().expandByScalar(-0.1));
                    });
                    if (!invalid) boxes.push(box);
                });
            });

            var size = new Vector3();
            box.getSize(size);
            var vol = size.x * size.y * size.z;
            var emptySpace = intersectBoxes.reduce((volDiff: number, box: Box3) => {
                box.getSize(size);
                return volDiff - size.x * size.y * size.z;
            }, vol);

            var combinationCandidates: any[] = [];
            boxes.forEach((box) => {
                var combin = BoxSplitter.makeCombinations([box], boxes, emptySpace, 0);
                if (combin) {
                    combin = [box, ...combin];
                    if (BoxSplitter.checkDuplicate(combin, combinationCandidates)) {
                        combinationCandidates.push(combin);
                    }
                }
            })
            combinationCandidates.sort((g1, g2) => {
                return (g1.length - g2.length)
            })

            var res = combinationCandidates[0];
            if (!res) {
                console.log("WARN No split found for intersection of ");
                console.log(box)
                console.log("with boxes: ");
                console.log(intersectBoxes)
                console.log("DEBUG => rejected combination:");
                console.log(this.rejected);
                // return this.rejected;
                return null;
            }
            return res;
        }
    }

    static getRejected() {
        return this.rejected;
    }
}