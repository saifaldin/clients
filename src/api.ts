/* tslint:disable */
/* eslint-disable */
/**
 * Pickly Post Service
 * Post Service API Specs
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface GenericError
 */
export interface GenericError {
    /**
     * 
     * @type {Array<string>}
     * @memberof GenericError
     */
    message?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof GenericError
     */
    status_code?: number;
}
/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    postsCount?: number;
    /**
     * 
     * @type {Array<SinglePostResponse>}
     * @memberof InlineResponse200
     */
    posts?: Array<SinglePostResponse>;
}
/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    status?: string;
}
/**
 * 
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002
     */
    votes_count?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002
     */
    optionId?: string;
}
/**
 * 
 * @export
 * @interface InlineResponse201
 */
export interface InlineResponse201 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse201
     */
    id: string;
}
/**
 * 
 * @export
 * @interface InlineResponse2011
 */
export interface InlineResponse2011 {
    /**
     * 
     * @type {Array<InlineResponse2011Groups>}
     * @memberof InlineResponse2011
     */
    groups: Array<InlineResponse2011Groups>;
}
/**
 * 
 * @export
 * @interface InlineResponse2011Groups
 */
export interface InlineResponse2011Groups {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2011Groups
     */
    id?: string;
    /**
     * 
     * @type {Array<InlineResponse2011Options>}
     * @memberof InlineResponse2011Groups
     */
    options?: Array<InlineResponse2011Options>;
}
/**
 * 
 * @export
 * @interface InlineResponse2011Options
 */
export interface InlineResponse2011Options {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2011Options
     */
    id: string;
}
/**
 * 
 * @export
 * @interface OptionsCreationRequest
 */
export interface OptionsCreationRequest {
    /**
     * 
     * @type {string}
     * @memberof OptionsCreationRequest
     */
    body: string;
}
/**
 * 
 * @export
 * @interface OptionsCreationResponse
 */
export interface OptionsCreationResponse {
    /**
     * 
     * @type {string}
     * @memberof OptionsCreationResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof OptionsCreationResponse
     */
    body?: string;
    /**
     * 
     * @type {Array<OptionsGroupCreationResponseImageUrl>}
     * @memberof OptionsCreationResponse
     */
    image_url?: Array<OptionsGroupCreationResponseImageUrl>;
}
/**
 * 
 * @export
 * @interface OptionsGroupCreation
 */
export interface OptionsGroupCreation {
    /**
     * 
     * @type {Array<OptionsGroupCreationRequest>}
     * @memberof OptionsGroupCreation
     */
    groups: Array<OptionsGroupCreationRequest>;
}
/**
 * 
 * @export
 * @interface OptionsGroupCreationRequest
 */
export interface OptionsGroupCreationRequest {
    /**
     * 
     * @type {string}
     * @memberof OptionsGroupCreationRequest
     */
    name: string;
    /**
     * 
     * @type {Array<OptionsCreationRequest>}
     * @memberof OptionsGroupCreationRequest
     */
    options: Array<OptionsCreationRequest>;
}
/**
 * 
 * @export
 * @interface OptionsGroupCreationResponse
 */
export interface OptionsGroupCreationResponse {
    /**
     * 
     * @type {string}
     * @memberof OptionsGroupCreationResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof OptionsGroupCreationResponse
     */
    name?: string;
    /**
     * 
     * @type {Array<OptionsGroupCreationResponseImageUrl>}
     * @memberof OptionsGroupCreationResponse
     */
    image_url?: Array<OptionsGroupCreationResponseImageUrl>;
    /**
     * 
     * @type {Array<OptionsCreationResponse>}
     * @memberof OptionsGroupCreationResponse
     */
    options: Array<OptionsCreationResponse>;
}
/**
 * 
 * @export
 * @interface OptionsGroupCreationResponseImageUrl
 */
export interface OptionsGroupCreationResponseImageUrl {
    /**
     * 
     * @type {string}
     * @memberof OptionsGroupCreationResponseImageUrl
     */
    url: string;
}
/**
 * 
 * @export
 * @interface PostCreationRequest
 */
export interface PostCreationRequest {
    /**
     * 
     * @type {string}
     * @memberof PostCreationRequest
     */
    caption?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreationRequest
     */
    is_hidden: boolean;
    /**
     * 
     * @type {string}
     * @memberof PostCreationRequest
     */
    type: PostCreationRequestTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum PostCreationRequestTypeEnum {
    TextPoll = 'text poll',
    ImagePoll = 'image poll',
    MiniSurvey = 'mini survey'
}

/**
 * 
 * @export
 * @interface PostFinishedFlagRequest
 */
export interface PostFinishedFlagRequest {
    /**
     * 
     * @type {boolean}
     * @memberof PostFinishedFlagRequest
     */
    finished: boolean;
}
/**
 * 
 * @export
 * @interface SinglePostResponse
 */
export interface SinglePostResponse {
    /**
     * 
     * @type {SinglePostResponseUser}
     * @memberof SinglePostResponse
     */
    user?: SinglePostResponseUser;
    /**
     * 
     * @type {string}
     * @memberof SinglePostResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SinglePostResponse
     */
    caption?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SinglePostResponse
     */
    is_hidden: boolean;
    /**
     * 
     * @type {string}
     * @memberof SinglePostResponse
     */
    created_at: string;
    /**
     * 
     * @type {string}
     * @memberof SinglePostResponse
     */
    type: SinglePostResponseTypeEnum;
    /**
     * 
     * @type {Array<OptionsGroupCreationResponseImageUrl>}
     * @memberof SinglePostResponse
     */
    image_url?: Array<OptionsGroupCreationResponseImageUrl>;
    /**
     * 
     * @type {SinglePostResponseOptionsGroups}
     * @memberof SinglePostResponse
     */
    options_groups: SinglePostResponseOptionsGroups;
}

/**
    * @export
    * @enum {string}
    */
export enum SinglePostResponseTypeEnum {
    TextPoll = 'text poll',
    ImagePoll = 'image poll',
    MiniSurvey = 'mini_survey'
}

/**
 * 
 * @export
 * @interface SinglePostResponseOptionsGroups
 */
export interface SinglePostResponseOptionsGroups {
    /**
     * 
     * @type {Array<OptionsGroupCreationResponse>}
     * @memberof SinglePostResponseOptionsGroups
     */
    groups: Array<OptionsGroupCreationResponse>;
}
/**
 * 
 * @export
 * @interface SinglePostResponseUser
 */
export interface SinglePostResponseUser {
    /**
     * 
     * @type {string}
     * @memberof SinglePostResponseUser
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof SinglePostResponseUser
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SinglePostResponseUser
     */
    profile_pic?: string;
}

/**
 * MediaApi - axios parameter creator
 * @export
 */
export const MediaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add the media data related to a post
         * @param {any} [file] 
         * @param {string} [entityType] 
         * @param {string} [entityId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadOneMedia: async (file?: any, entityType?: string, entityId?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/media`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
    
            if (entityType !== undefined) { 
                localVarFormParams.append('entity_type', entityType as any);
            }
    
            if (entityId !== undefined) { 
                localVarFormParams.append('entity_id', new Blob([JSON.stringify(entityId)], { type: "application/json", }));
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MediaApi - functional programming interface
 * @export
 */
export const MediaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MediaApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Add the media data related to a post
         * @param {any} [file] 
         * @param {string} [entityType] 
         * @param {string} [entityId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadOneMedia(file?: any, entityType?: string, entityId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadOneMedia(file, entityType, entityId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MediaApi - factory interface
 * @export
 */
export const MediaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MediaApiFp(configuration)
    return {
        /**
         * 
         * @summary Add the media data related to a post
         * @param {any} [file] 
         * @param {string} [entityType] 
         * @param {string} [entityId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadOneMedia(file?: any, entityType?: string, entityId?: string, options?: any): AxiosPromise<InlineResponse2001> {
            return localVarFp.uploadOneMedia(file, entityType, entityId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MediaApi - object-oriented interface
 * @export
 * @class MediaApi
 * @extends {BaseAPI}
 */
export class MediaApi extends BaseAPI {
    /**
     * 
     * @summary Add the media data related to a post
     * @param {any} [file] 
     * @param {string} [entityType] 
     * @param {string} [entityId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaApi
     */
    public uploadOneMedia(file?: any, entityType?: string, entityId?: string, options?: any) {
        return MediaApiFp(this.configuration).uploadOneMedia(file, entityType, entityId, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * PostsApi - axios parameter creator
 * @export
 */
export const PostsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary add option group to post
         * @param {string} postid id of post needed
         * @param {OptionsGroupCreation} optionsGroupCreation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOptionsGroup: async (postid: string, optionsGroupCreation: OptionsGroupCreation, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'postid' is not null or undefined
            assertParamExists('createOptionsGroup', 'postid', postid)
            // verify required parameter 'optionsGroupCreation' is not null or undefined
            assertParamExists('createOptionsGroup', 'optionsGroupCreation', optionsGroupCreation)
            const localVarPath = `/posts/{postid}/groups`
                .replace(`{${"postid"}}`, encodeURIComponent(String(postid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(optionsGroupCreation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a new post
         * @param {PostCreationRequest} postCreationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPost: async (postCreationRequest: PostCreationRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'postCreationRequest' is not null or undefined
            assertParamExists('createPost', 'postCreationRequest', postCreationRequest)
            const localVarPath = `/posts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(postCreationRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete one post
         * @param {string} postid id of post needed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOnePost: async (postid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'postid' is not null or undefined
            assertParamExists('deleteOnePost', 'postid', postid)
            const localVarPath = `/posts/{postid}`
                .replace(`{${"postid"}}`, encodeURIComponent(String(postid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary patch post
         * @param {string} postid id of post needed
         * @param {PostFinishedFlagRequest} postFinishedFlagRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        flagPostAsFinished: async (postid: string, postFinishedFlagRequest: PostFinishedFlagRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'postid' is not null or undefined
            assertParamExists('flagPostAsFinished', 'postid', postid)
            // verify required parameter 'postFinishedFlagRequest' is not null or undefined
            assertParamExists('flagPostAsFinished', 'postFinishedFlagRequest', postFinishedFlagRequest)
            const localVarPath = `/posts/{postid}`
                .replace(`{${"postid"}}`, encodeURIComponent(String(postid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(postFinishedFlagRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get single post
         * @param {string} postid id of post needed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOnePost: async (postid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'postid' is not null or undefined
            assertParamExists('getOnePost', 'postid', postid)
            const localVarPath = `/posts/{postid}`
                .replace(`{${"postid"}}`, encodeURIComponent(String(postid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get posts
         * @param {number} [offset] The number of items to skip before starting to collect the result set
         * @param {number} [limit] The numbers of items to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPosts: async (offset?: number, limit?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/posts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PostsApi - functional programming interface
 * @export
 */
export const PostsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PostsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary add option group to post
         * @param {string} postid id of post needed
         * @param {OptionsGroupCreation} optionsGroupCreation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOptionsGroup(postid: string, optionsGroupCreation: OptionsGroupCreation, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2011>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOptionsGroup(postid, optionsGroupCreation, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create a new post
         * @param {PostCreationRequest} postCreationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPost(postCreationRequest: PostCreationRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse201>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPost(postCreationRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete one post
         * @param {string} postid id of post needed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOnePost(postid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOnePost(postid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary patch post
         * @param {string} postid id of post needed
         * @param {PostFinishedFlagRequest} postFinishedFlagRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async flagPostAsFinished(postid: string, postFinishedFlagRequest: PostFinishedFlagRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.flagPostAsFinished(postid, postFinishedFlagRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get single post
         * @param {string} postid id of post needed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOnePost(postid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SinglePostResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOnePost(postid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get posts
         * @param {number} [offset] The number of items to skip before starting to collect the result set
         * @param {number} [limit] The numbers of items to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPosts(offset?: number, limit?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPosts(offset, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PostsApi - factory interface
 * @export
 */
export const PostsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PostsApiFp(configuration)
    return {
        /**
         * 
         * @summary add option group to post
         * @param {string} postid id of post needed
         * @param {OptionsGroupCreation} optionsGroupCreation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOptionsGroup(postid: string, optionsGroupCreation: OptionsGroupCreation, options?: any): AxiosPromise<InlineResponse2011> {
            return localVarFp.createOptionsGroup(postid, optionsGroupCreation, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a new post
         * @param {PostCreationRequest} postCreationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPost(postCreationRequest: PostCreationRequest, options?: any): AxiosPromise<InlineResponse201> {
            return localVarFp.createPost(postCreationRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete one post
         * @param {string} postid id of post needed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOnePost(postid: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteOnePost(postid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary patch post
         * @param {string} postid id of post needed
         * @param {PostFinishedFlagRequest} postFinishedFlagRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        flagPostAsFinished(postid: string, postFinishedFlagRequest: PostFinishedFlagRequest, options?: any): AxiosPromise<void> {
            return localVarFp.flagPostAsFinished(postid, postFinishedFlagRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get single post
         * @param {string} postid id of post needed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOnePost(postid: string, options?: any): AxiosPromise<SinglePostResponse> {
            return localVarFp.getOnePost(postid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get posts
         * @param {number} [offset] The number of items to skip before starting to collect the result set
         * @param {number} [limit] The numbers of items to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPosts(offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse200> {
            return localVarFp.getPosts(offset, limit, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PostsApi - object-oriented interface
 * @export
 * @class PostsApi
 * @extends {BaseAPI}
 */
export class PostsApi extends BaseAPI {
    /**
     * 
     * @summary add option group to post
     * @param {string} postid id of post needed
     * @param {OptionsGroupCreation} optionsGroupCreation 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    public createOptionsGroup(postid: string, optionsGroupCreation: OptionsGroupCreation, options?: any) {
        return PostsApiFp(this.configuration).createOptionsGroup(postid, optionsGroupCreation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create a new post
     * @param {PostCreationRequest} postCreationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    public createPost(postCreationRequest: PostCreationRequest, options?: any) {
        return PostsApiFp(this.configuration).createPost(postCreationRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete one post
     * @param {string} postid id of post needed
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    public deleteOnePost(postid: string, options?: any) {
        return PostsApiFp(this.configuration).deleteOnePost(postid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary patch post
     * @param {string} postid id of post needed
     * @param {PostFinishedFlagRequest} postFinishedFlagRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    public flagPostAsFinished(postid: string, postFinishedFlagRequest: PostFinishedFlagRequest, options?: any) {
        return PostsApiFp(this.configuration).flagPostAsFinished(postid, postFinishedFlagRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get single post
     * @param {string} postid id of post needed
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    public getOnePost(postid: string, options?: any) {
        return PostsApiFp(this.configuration).getOnePost(postid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get posts
     * @param {number} [offset] The number of items to skip before starting to collect the result set
     * @param {number} [limit] The numbers of items to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    public getPosts(offset?: number, limit?: number, options?: any) {
        return PostsApiFp(this.configuration).getPosts(offset, limit, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * VotesApi - axios parameter creator
 * @export
 */
export const VotesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add vote
         * @param {string} optionid id of option
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addVote: async (optionid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'optionid' is not null or undefined
            assertParamExists('addVote', 'optionid', optionid)
            const localVarPath = `/votes/{optionid}`
                .replace(`{${"optionid"}}`, encodeURIComponent(String(optionid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * VotesApi - functional programming interface
 * @export
 */
export const VotesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VotesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Add vote
         * @param {string} optionid id of option
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addVote(optionid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InlineResponse2002>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addVote(optionid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * VotesApi - factory interface
 * @export
 */
export const VotesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VotesApiFp(configuration)
    return {
        /**
         * 
         * @summary Add vote
         * @param {string} optionid id of option
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addVote(optionid: string, options?: any): AxiosPromise<Array<InlineResponse2002>> {
            return localVarFp.addVote(optionid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * VotesApi - object-oriented interface
 * @export
 * @class VotesApi
 * @extends {BaseAPI}
 */
export class VotesApi extends BaseAPI {
    /**
     * 
     * @summary Add vote
     * @param {string} optionid id of option
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VotesApi
     */
    public addVote(optionid: string, options?: any) {
        return VotesApiFp(this.configuration).addVote(optionid, options).then((request) => request(this.axios, this.basePath));
    }
}

