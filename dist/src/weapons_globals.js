"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaponsGlobals = void 0;
class WeaponsGlobals {
    constructor(logger, tables, modConf) {
        this.logger = logger;
        this.tables = tables;
        this.modConf = modConf;
        this.globalDB = this.tables.globals.config;
        this.itemDB = this.tables.templates.items;
    }
    loadGlobalWeps() {
        if (this.modConf.malf_changes == true) {
            this.globalDB.Malfunction.DurRangeToIgnoreMalfs["x"] = 98;
            this.globalDB.Malfunction.DurRangeToIgnoreMalfs["y"] = 100;
            this.globalDB.Overheat.MaxCOIIncreaseMult = 4;
            this.globalDB.Overheat.FirerateReduceMinMult = 1;
            this.globalDB.Overheat.FirerateOverheatBorder = 120;
            this.globalDB.Overheat.AutoshotChance = 0.4;
            this.globalDB.Overheat.OverheatProblemsStart = 70;
            this.globalDB.Overheat.MinWearOnOverheat = 0.2;
            this.globalDB.Overheat.MaxWearOnOverheat = 0.4;
            this.globalDB.RepairKitSettings.durabilityPointCostGuns = 0;
            for (let i in this.itemDB) {
                let fileData = this.itemDB[i];
                if (fileData._props.weapClass === "smg"
                    || fileData._props.weapClass === "shotgun"
                    || fileData._props.weapClass === "assaultCarbine"
                    || fileData._props.weapClass === "sniperRifle"
                    || fileData._props.weapClass === "assaultRifle"
                    || fileData._props.weapClass === "machinegun"
                    || fileData._props.weapClass === "marksmanRifle"
                    || fileData._props.weapClass === "assaultRifle"
                    || fileData._props.weapClass === "pistol"
                    || fileData._parent === "616eb7aea207f41933308f46") {
                    fileData._props.MinRepairDegradation = 0;
                    fileData._props.MaxRepairDegradation = 0.005;
                    fileData._props.MinRepairKitDegradation = 0;
                    fileData._props.MaxRepairKitDegradation = 0;
                    fileData._props.RepairComplexity = 0;
                    fileData._props.RepairQuality = 0.1;
                }
            }
        }
        if (this.modConf.recoil_attachment_overhaul == true && this.modConf.legacy_recoil_changes != true) {
            this.globalDB.Aiming.AimProceduralIntensity = 1;
            this.globalDB.Aiming.RecoilCrank = true;
            this.globalDB.Aiming.RecoilXIntensityByPose["x"] = 0.67;
            this.globalDB.Aiming.RecoilXIntensityByPose["y"] = 0.7;
            this.globalDB.Aiming.RecoilXIntensityByPose["z"] = 1;
            this.globalDB.Aiming.RecoilYIntensityByPose["x"] = 0.65;
            this.globalDB.Aiming.RecoilYIntensityByPose["y"] = 1.2;
            this.globalDB.Aiming.RecoilYIntensityByPose["z"] = 1;
            this.globalDB.Aiming.RecoilZIntensityByPose["x"] = 0.5;
            this.globalDB.Aiming.RecoilZIntensityByPose["y"] = 1.35;
            this.globalDB.Aiming.RecoilZIntensityByPose["z"] = 1;
            this.globalDB.Aiming.ProceduralIntensityByPose["x"] = 0.1;
            this.globalDB.Aiming.ProceduralIntensityByPose["y"] = 0.6;
            if (this.modConf.logEverything == true) {
                this.logger.info("Recoil Changes Enabled");
            }
        }
        if (this.modConf.legacy_recoil_changes == true && this.modConf.recoil_attachment_overhaul != true) {
            for (let i in this.itemDB) {
                let fileData = this.itemDB[i];
                if (fileData._props.weapClass === "smg"
                    || fileData._props.weapClass === "shotgun"
                    || fileData._props.weapClass === "assaultCarbine"
                    || fileData._props.weapClass === "sniperRifle"
                    || fileData._props.weapClass === "assaultRifle"
                    || fileData._props.weapClass === "machinegun"
                    || fileData._props.weapClass === "marksmanRifle"
                    || fileData._props.weapClass === "assaultRifle") {
                    fileData._props.RecoilForceUp *= 0.7;
                    fileData._props.RecoilForceBack *= 0.5;
                    fileData._props.Convergence *= 5.5;
                    fileData._props.RecolDispersion *= 0.5;
                    fileData._props.CameraRecoil *= 0.5;
                    fileData._props.CameraSnap *= 0.5;
                    fileData._props.Ergonomics = 60;
                }
                if (fileData._props.weapClass === "pistol") {
                    fileData._props.RecoilForceUp *= 0.3;
                    fileData._props.RecoilForceBack *= 2;
                    fileData._props.Convergence *= 4;
                    fileData._props.RecolDispersion *= 0.5;
                    fileData._props.CameraRecoil *= 1;
                    fileData._props.CameraSnap *= 1.7;
                    fileData._props.Ergonomics = 60;
                }
            }
            this.globalDB.Aiming.RecoilCrank = true;
            this.globalDB.Aiming.RecoilDamping = 0.7;
            this.globalDB.Aiming.RecoilHandDamping = 0.65;
            this.globalDB.Aiming.RecoilConvergenceMult = 1;
            this.globalDB.Aiming.RecoilVertBonus = 0;
            this.globalDB.Aiming.RecoilBackBonus = 0;
            this.globalDB.Aiming.RecoilXIntensityByPose["x"] = 0.67;
            this.globalDB.Aiming.RecoilXIntensityByPose["y"] = 0.7;
            this.globalDB.Aiming.RecoilXIntensityByPose["z"] = 1;
            this.globalDB.Aiming.RecoilYIntensityByPose["x"] = 0.65;
            this.globalDB.Aiming.RecoilYIntensityByPose["y"] = 1.2;
            this.globalDB.Aiming.RecoilYIntensityByPose["z"] = 1;
            this.globalDB.Aiming.RecoilZIntensityByPose["x"] = 0.5;
            this.globalDB.Aiming.RecoilZIntensityByPose["y"] = 1.35;
            this.globalDB.Aiming.RecoilZIntensityByPose["z"] = 1;
            this.globalDB.Aiming.ProceduralIntensityByPose["x"] = 0.1;
            this.globalDB.Aiming.ProceduralIntensityByPose["y"] = 0.6;
            if (this.modConf.logEverything == true) {
                this.logger.info("Legacy Recoil Enabled");
            }
        }
        if (this.modConf.logEverything == true) {
            this.logger.info("Weapons Globals Loaded");
        }
    }
}
exports.WeaponsGlobals = WeaponsGlobals;