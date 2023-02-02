/**
 * fortnite-api-io
 * Module to make API calls to fortniteapi.io
 *
 * @author Max Pike
 * @license MIT
 */

"use strict";

/**
 * endpoints.js
 * Exports and builds fortniteapi.io API endpoints
 */

const endpoint = "https://fortniteapi.io/v1";
const endpoint_v2 = "https://fortniteapi.io/v2";
const endpoint_v3 = "https://fortniteapi.io/v3";
module.exports = {
    listChallenges: (season, lang) => `${endpoint_v3}/challenges?season=${season}&lang=${lang}`,
    listItems: lang => `${endpoint_v2}/items/list?lang=${lang}`,
    listUpcomingItems: lang => `${endpoint_v2}/items/upcoming?lang=${lang}`,
    getItemDetails: (id, lang) => `${endpoint_v2}/items/get?id=${id}&lang=${lang}`,
    getListSet: (lang) => `${endpoint_v2}/items/sets?lang=${lang}`,
    getDailyShop: lang => `${endpoint_v2}/shop?lang=${lang}`,
    getRarities: lang => `${endpoint_v2}/rarities?lang=${lang}`,
    searchAccountId: (username, platform, strict = true) => {
        let uri = `${endpoint}/lookup?username=${username}`;
        if (platform) {
            uri += `&platform=${platform}`;
        }
        if (strict === false) {
            uri += `&strict=false`;
        }
        return uri;
    },
    getGlobalPlayerStats: account => `${endpoint}/stats?account=${account}`,
    getNews: (mode, lang) => `${endpoint}/news?lang=${lang}&type=${mode}`,
    getBattlePassRewards: (season, lang) => `${endpoint_v2}/battlepass?lang=${lang}&season=${season}`,
    getAchievements: lang => `${endpoint}/achievements?lang=${lang}`,
    getTournaments: lang => `${endpoint}/events/list?lang=${lang}`,
    getTournamentSessionDetails: (windowId, page) => `${endpoint}/events/window?windowId=${windowId}&page=${page}`,
    getTournamentScores: eventId => `${endpoint}/events/cumulative?eventId=${eventId}`,
    listPreviousMaps: _ => `${endpoint}/maps/list`,
    listPreviousSeasons: _ => `${endpoint}/seasons/list`,
    getMapsItems: _ => `${endpoint_v2}/maps/items/list`,
    listCurrentPOI: lang => `${endpoint_v2}/game/poi?lang=${lang}`,
    listCurrentGameModes: lang => `${endpoint}/game/modes?lang=${lang}`,
    getBundles: lang => `${endpoint_v2}/bundles?lang=${lang}`,
    listLoot: lang => `${endpoint}/loot/list?lang=${lang}`,
    getLootDetails: (id, lang) => `${endpoint}/loot/get?id=${id}&lang=${lang}`,
    listSets: lang => `${endpoint}/items/sets?lang=${lang}`,
    getReplayDownloadLink: id => `${endpoint}/events/replay?session=${id}`,
    getWeaponDetails: (id, lang) => `${endpoint}/loot/get?id=${id}&lang=${lang}`,
    listWeaponSpawnChances: mode => `${endpoint}/loot/chances?mode=${mode}`,
    getGameModeExtendedData: mode => `${endpoint}/game/modes/data?playlist=${mode}`,
    listFeaturedCreativeIslands: _ => `${endpoint}/creative/featured`,
    searchIsland: code => `${endpoint}/creative/island?code=${code}`,
    discoveryIsland: _ => `${endpoint_v2}/creative/discovery`,
    listFish: lang => `${endpoint}/loot/fish?lang=${lang}`,
    fortniteCrew: lang => `${endpoint_v2}/crew?lang=${lang}`,
    fortniteCrewHistory: lang => `${endpoint_v2}/crew/history?lang=${lang}`,
    getPlayerFishStats: id => `${endpoint}/stats/fish?accountId=${id}`,
    getVehiclesStats: _ => `${endpoint_v2}/game/vehicles`,
};
