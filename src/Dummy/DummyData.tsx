import {ImageType} from "../Interface/Interface";

export const communityDummy = require("./image-dummy.json");
export const buildingDummy = require("./building-dummy.json");
export const getCommunityDummy = (id: string) => {
    switch (id){
        case "img":
            return communityDummy;
        case "building":
            return buildingDummy;
    }
}