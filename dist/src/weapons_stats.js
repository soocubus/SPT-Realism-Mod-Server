"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaponsStats = void 0;
class WeaponsStats {
    constructor(logger, tables, modConf) {
        this.logger = logger;
        this.tables = tables;
        this.modConf = modConf;
        this.itemDB = this.tables.templates.items;
    }
    loadWepStats() {
        const _9x18AmmoArr = this.itemDB["57f4c844245977379d5c14d1"]._props.Chambers[0]._props.filters[0].Filter;
        for (let i in this.itemDB) {
            let fileData = this.itemDB[i];
            //Kedr-B
            if (fileData._id === "57f3c6bd24597738e730fa2f") {
                if (this.modConf.malf_changes == true) {
                    fileData._props.Chambers[0]._props.filters[0].Filter = _9x18AmmoArr;
                }
            }
            //Kedr
            if (fileData._id === "57d14d2524597714373db789") {
                if (this.modConf.malf_changes == true) {
                    fileData._props.Chambers[0]._props.filters[0].Filter = _9x18AmmoArr;
                }
            }
            //Makarov
            if (fileData._id === "5448bd6b4bdc2dfc2f8b4569") {
                if (this.modConf.malf_changes == true) {
                    fileData._props.Chambers[0]._props.filters[0].Filter = _9x18AmmoArr;
                }
            }
            //Makarov threaded
            if (fileData._id === "579204f224597773d619e051") {
                if (this.modConf.malf_changes == true) {
                    fileData._props.Chambers[0]._props.filters[0].Filter = _9x18AmmoArr;
                }
            }
            //PB
            if (fileData._id === "56e0598dd2720bb5668b45a6") {
                if (this.modConf.malf_changes == true) {
                    fileData._props.Chambers[0]._props.filters[0].Filter = _9x18AmmoArr;
                }
            }
            //APS
            if (fileData._id === "5a17f98cfcdbcb0980087290") {
                if (this.modConf.malf_changes == true) {
                    fileData._props.Chambers[0]._props.filters[0].Filter = _9x18AmmoArr;
                }
            }
            //APS
            if (fileData._id === "5abccb7dd8ce87001773e277") {
                if (this.modConf.malf_changes == true) {
                    fileData._props.Chambers[0]._props.filters[0].Filter = _9x18AmmoArr;
                }
            }
        }
        if (this.modConf.logEverything == true) {
            this.logger.info("Weapon Stats Loaded");
        }
    }
}
exports.WeaponsStats = WeaponsStats;