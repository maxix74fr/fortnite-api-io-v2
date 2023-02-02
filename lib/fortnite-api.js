/**
 * fortnite-api-io
 * Module to make API calls to fortniteapi.io
 *
 * @author Ben Hawley
 * @author Théo Bontemps (maintainer)
 * @author Max Pike (last maintainer)
 * @license MIT
 */

"use strict";

/**
 * fortnite-api.js
 * Class to make requests to API
 */

// Internal Libaries
const BaseClient = require('./base-client');
const endpoints = require("./endpoints");

/**
 * Fortnite API Class
 */
class FortniteAPI extends BaseClient {

    /**
     * constructor()
     *
     * @param {string} credentials
     * @param {object} [config]
     * @param {string} [config.defaultLanguage]
     * @param {string} [config.ignoreWarnings]
     */
    constructor(credentials, config = {}) {
        super(credentials, config)

    }

    /**
     * listItems()
     * List all cosmetic items: skins, backpacks, emotes, pickaxes, sprays, etc.
     *
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr, zh-CN, zh-Hant
     * @returns {Promise<object>}
     */
    listItems(options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.listItems(lang);
        return this.request(uri);
    }

    /**
     * getListSet()
     *  List all the sets used by cosmetics.
     *
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr
     * @returns {Promise<object>}
     */
    getListSet(options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.getListSet(lang);
        return this.request(uri);
    }

    /**
     * listChallenges()
     * List all challenges as well as rewards (xp, stars, cosmetics).
     * Weekly challenges/missions are available for each season under .weekly
     * Limited time missions are available under .limited_time
     *
     * @param {string} [season=current]
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr, zh-CN, zh-Hant
     * @returns {Promise<object>}
     */
    listChallenges(season = "current", options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.listChallenges(season, lang);
        return this.request(uri);
    }

    /**
     * listUpcomingItems()
     * List upcoming cosmetic items: skins, backpacks, emotes, pickaxes.
     *
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr, zh-CN, zh-Hant
     * @returns {Promise<object>}
     */
    listUpcomingItems(options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.listUpcomingItems(lang);
        return this.request(uri);
    }

    /**
     * getItemDetails()
     * Get all available details about an item.
     * The ID can be found from the full list of items.
     *
     * @param {string} itemId
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr, zh-CN, zh-Hant
     * @returns {Promise<object>}
     */
    getItemDetails(itemId, options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.getItemDetails(itemId, lang);
        return this.request(uri);
    }

    /**
     * getDailyShop()
     * List all items currently in the shop
     *
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr, zh-CN, zh-Hant
     * @returns {Promise<object>}
     */
    getDailyShop(options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.getDailyShop(lang);
        return this.request(uri);
    }

    /**
     * searchAccountId()
     * Search an account ID using a player name
     *
     * @param {string} username
     * @param {object} [options]
     * @param {boolean} [options.strict=true] When false will return other results for similar names
     * @param {string} [options.platform=""] Search for accounts not linked to an epic account: xbl or psn
     * @returns {Promise<object>}
     */
    searchAccountId(username, options = { strict: true, platform: "" }) {
        const uri = endpoints.searchAccountId(
            username,
            options.platform,
            options.strict
        );
        return this.request(uri);
    }

    /**
     * getGlobalPlayerStats()
     * Get player stats, with a breakdown per platform used (mouse & keyboard, gamepad, touch)
     *
     * @param {string} accountId
     * @returns {Promise<object>}
     */
    getGlobalPlayerStats(accountId) {
        const uri = endpoints.getGlobalPlayerStats(accountId);
        return this.request(uri);
    }

    /**
     * getNews()
     * Lists the current news in Fortnite Battle Royale or Save The World
     *
     * @param {string} [mode=br] game mode "br" or "stw"
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr
     * @returns {Promise<object>}
     */
    getNews(mode = "br", options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.getNews(mode, lang);
        return this.request(uri);
    }

    /**
     * getBattlepassRewards()
     * Get the list of rewards given in the Battle Pass for each season
     *
     * @param {string} [season=current]
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr
     * @returns {Promise<object>}
     */
    getBattlePassRewards(season = "current", options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.getBattlePassRewards(season, lang);
        return this.request(uri);
    }

    /**
     * getAchievements()
     * Get the list of achievements
     *
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr
     * @returns {Promise<object>}
     */
    getAchievements(options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.getAchievements(lang);
        return this.request(uri);
    }

    /**
     * getTournaments
     * Get the list of tournaments
     *
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr
     * @returns {Promise<object>}
     */
    getTournaments(options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.getTournaments(lang);
        return this.request(uri);
    }

    /**
     * getTournamentSessionDetails()
     * Get a tournament session details: rules, payout, results
     *
     * @param {string} windowId
     * @param {Integer} [page=0]
     * @returns {Promise<object>}
     */
    getTournamentSessionDetails(windowId, page = 0) {
        const uri = endpoints.getTournamentSessionDetails(windowId, page);
        return this.request(uri);
    }

    /**
     * getTournamentScores()
     * Get the cumulative scoring for a tournament event
     *
     * @param {string} eventId the tournament event id
     * @returns {Promise<object>}
     */
    getTournamentScores(eventId) {
        const uri = endpoints.getTournamentScores(eventId);
        return this.request(uri);
    }

    /**
     * discoveryIsland()
     * Get the list of creative islands available in the discovery tab.
     *
     * @returns {Promise<object>}
     */
    discoveryIsland() {
        const uri = endpoints.discoveryIsland();
        return this.request(uri);
    }

    /**
     * getVehiclesStats()
     *  Get the list of vehicles with their name, icon, stats, gears.
     *
     * @returns {Promise<object>}
     */
    getVehiclesStats() {
        const uri = endpoints.getVehiclesStats();
        return this.request(uri);
    }

    /**
     * listPreviousMaps()
     * Get the list of links to the different maps
     *
     * @returns {Promise<object>}
     */
    listPreviousMaps() {
        const uri = endpoints.listPreviousMaps();
        return this.request(uri);
    }

    /**
     * listPreviousSeasons()
     * List all the season dates and patch versions associated.
     *
     * @returns {Promise<object>}
     */
    listPreviousSeasons() {
        const uri = endpoints.listPreviousSeasons();
        return this.request(uri);
    }

    /**
     * listCurrentPOI()
     * Get the current games points of interest
     *
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr
     * @returns {Promise<object>}
     */
    listCurrentPOI(options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.listCurrentPOI(lang);
        return this.request(uri);
    }

    /**
     * listCurrentGameModes()
     * List the current game modes
     *
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr
     * @returns {Promise<object>}
     */
    listCurrentGameModes(options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.listCurrentGameModes(lang);
        return this.request(uri);
    }

    /**
     * getAccountIdByUsername()
     * Get an account ID using a player name
     *
     * @param {string} username
     * @param {object} [options]
     * @param {boolean} [options.strict=true] When false will return other results for similar names
     * @param {string} [options.platform=""] Search for accounts not linked to an epic account: xbl or psn
     * @returns {Promise<object>}
     */
    getAccountIdByUsername(username, options = { strict: true, platform: "" }) {
        const uri = endpoints.searchAccountId(
            username,
            options.platform,
            options.strict
        );
        return this.request(uri);
    }

    /**
     * getBundles()
     * List recent bundles
     *
     * @premium
     * @param {object} [options]
     * @param {string} [options.lang] en, de, es, fr, it, ja
     * @returns {Promise<object>}
     */
    getBundles(options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.getBundles(lang);
        return this.request(uri);
    }

    /**
     * listLoot()
     * List all loot/weapons in the game with their basic stats
     *
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr
     * @returns {Promise<object>}
     */
    listLoot(options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.listLoot(lang);
        return this.request(uri);
    }

    /**
     * getLootDetails()
     * Get all stats for a specific loot/weapon item
     *
     * @premium
     * @param {string} id of loot item
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr
     * @returns {Promise<object>}
     */
    getLootDetails(id, options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.getLootDetails(id, lang);
        return this.request(uri);
    }

    /**
     * listSets()
     * List all the sets used by cosmetics.
     *
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr
     * @returns {Promise<object>}
     */
    listSets(options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.listSets(lang);
        return this.request(uri);
    }

    /**
     * getReplayDownloadLink()
     * Get creative map informations
     *
     * @premium
     * @param {string} id of session
     * @returns {Promise<object>}
     */
    getReplayDownloadLink(id) {
        const uri = endpoints.getReplayDownloadLink(id);
        return this.request(uri);
    }

    /**
     * getWeaponDetails()
     * Get all stats for a specific loot/weapon item
     *
     * @premium
     * @param {string} id of weapon
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr
     * @returns {Promise<object>}
     */
    getWeaponDetails(id, options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.getWeaponDetails(id, lang);
        return this.request(uri);
    }

    /**
     * listWeaponsSpawnChance()
     * List the spawn chances for each type for a given game mode.
     *
     * @premium
     * @param {string} mode
     * @returns {Promise<object>}
     */
    listWeaponSpawnChances(mode) {
        const uri = endpoints.listWeaponSpawnChances(mode);
        return this.request(uri);
    }

    /**
     * getGameModeExtendedData()
     * A lot of different values, ranging from spawn % for rare chests, to number of llamas per game.
     *
     * @premium
     * @param {string} mode
     * @returns {Promise<object>}
     */
    getGameModeExtendedData(mode) {
        const uri = endpoints.getGameModeExtendedData(mode);
        return this.request(uri);
    }

    /**
     * listFeaturedCreativeIslands()
     * List the current featured islands in creative mode
     *
     * @returns {Promise<object>}
     */
    listFeaturedCreativeIslands() {
        const uri = endpoints.listFeaturedCreativeIslands();
        return this.request(uri);
    }

    /**
     * searchIsland()
     * Get all details related to a creative island
     *
     * @param {string} code of map
     * @returns {Promise<object>}
     */
    searchIsland(code) {
        const uri = endpoints.searchIsland(code);
        return this.request(uri);
    }

    /**
     * listFish()
     * Get the list of fish (name, description, image) as well as their minimum and maximum length
     *
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr
     * @returns {Promise<object>}
     */
    listFish(options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.listFish(lang);
        return this.request(uri);
    }

    /**
     * fortniteCrew()
     * Get the current fortnite crew information as well as the pricing.
     *
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr
     * @returns {Promise<object>}
     */
    fortniteCrew(options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.fortniteCrew(lang);
        return this.request(uri);
    }

    /**
     * fortniteCrewHistory()
     *  Get the fortnite crew information for each month.
     *
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr
     * @returns {Promise<object>}
     */
    fortniteCrewHistory(options = {}) {
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.fortniteCrewHistory(lang);
        return this.request(uri);
    }

    /**
     * getPlayerFishStats()
     * Get the stats for a specific player: each fish caught is returned with the best length for that player
     *
     * @param {string} accountId
     * @returns {Promise<object>}
     */
    getPlayerFishStats(accountId) {
        const uri = endpoints.getPlayerFishStats(accountId);
        return this.request(uri);
    }

    /**
     * getMapsItems()
     * Get items positions [NOT STABLE]
     *
     * @returns {Promise<object>}
     */
    getMapsItems() {
        const uri = endpoints.getMapsItems();
        return this.request(uri);
    }

    /**
     * getRarities()
     * Lists rarities and their associated colors
     *
     * @returns {Promise<object>}
     */
    getRarities() {
        const uri = endpoints.getRarities();
        return this.request(uri);
    }
}

module.exports = FortniteAPI;
