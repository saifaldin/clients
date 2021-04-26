import { BaseAPI } from "./base";
import * as API from "./index";
import * as axios from "axios";
export declare class MediaApi extends BaseAPI {
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
    constructor(basePath: string);
    uploadOneMedia(file?: any, entityType?: string, entityId?: string, options?: any): Promise<axios.AxiosResponse<any>>;
}
declare const _default: {
    MediaApi: typeof MediaApi;
    PostCreationRequestTypeEnum: typeof API.PostCreationRequestTypeEnum;
    SinglePostResponseTypeEnum: typeof API.SinglePostResponseTypeEnum;
    MediaApiAxiosParamCreator: (configuration?: API.Configuration | undefined) => {
        uploadOneMedia: (file?: any, entityType?: string | undefined, entityId?: string | undefined, options?: any) => Promise<import("./base").RequestArgs>;
    };
    MediaApiFp: (configuration?: API.Configuration | undefined) => {
        uploadOneMedia(file?: any, entityType?: string | undefined, entityId?: string | undefined, options?: any): Promise<(axios?: axios.AxiosInstance | undefined, basePath?: string | undefined) => axios.AxiosPromise<API.InlineResponse2001>>;
    };
    MediaApiFactory: (configuration?: API.Configuration | undefined, basePath?: string | undefined, axios?: axios.AxiosInstance | undefined) => {
        uploadOneMedia(file?: any, entityType?: string | undefined, entityId?: string | undefined, options?: any): axios.AxiosPromise<API.InlineResponse2001>;
    };
    PostsApiAxiosParamCreator: (configuration?: API.Configuration | undefined) => {
        createOptionsGroup: (postid: string, optionsGroupCreation: API.OptionsGroupCreation, options?: any) => Promise<import("./base").RequestArgs>;
        createPost: (postCreationRequest: API.PostCreationRequest, options?: any) => Promise<import("./base").RequestArgs>;
        deleteOnePost: (postid: string, options?: any) => Promise<import("./base").RequestArgs>;
        flagPostAsFinished: (postid: string, postFinishedFlagRequest: API.PostFinishedFlagRequest, options?: any) => Promise<import("./base").RequestArgs>;
        getOnePost: (postid: string, options?: any) => Promise<import("./base").RequestArgs>;
        getPosts: (offset?: number | undefined, limit?: number | undefined, options?: any) => Promise<import("./base").RequestArgs>;
    };
    PostsApiFp: (configuration?: API.Configuration | undefined) => {
        createOptionsGroup(postid: string, optionsGroupCreation: API.OptionsGroupCreation, options?: any): Promise<(axios?: axios.AxiosInstance | undefined, basePath?: string | undefined) => axios.AxiosPromise<API.InlineResponse2011>>;
        createPost(postCreationRequest: API.PostCreationRequest, options?: any): Promise<(axios?: axios.AxiosInstance | undefined, basePath?: string | undefined) => axios.AxiosPromise<API.InlineResponse201>>;
        deleteOnePost(postid: string, options?: any): Promise<(axios?: axios.AxiosInstance | undefined, basePath?: string | undefined) => axios.AxiosPromise<void>>;
        flagPostAsFinished(postid: string, postFinishedFlagRequest: API.PostFinishedFlagRequest, options?: any): Promise<(axios?: axios.AxiosInstance | undefined, basePath?: string | undefined) => axios.AxiosPromise<void>>;
        getOnePost(postid: string, options?: any): Promise<(axios?: axios.AxiosInstance | undefined, basePath?: string | undefined) => axios.AxiosPromise<API.SinglePostResponse>>;
        getPosts(offset?: number | undefined, limit?: number | undefined, options?: any): Promise<(axios?: axios.AxiosInstance | undefined, basePath?: string | undefined) => axios.AxiosPromise<API.InlineResponse200>>;
    };
    PostsApiFactory: (configuration?: API.Configuration | undefined, basePath?: string | undefined, axios?: axios.AxiosInstance | undefined) => {
        createOptionsGroup(postid: string, optionsGroupCreation: API.OptionsGroupCreation, options?: any): axios.AxiosPromise<API.InlineResponse2011>;
        createPost(postCreationRequest: API.PostCreationRequest, options?: any): axios.AxiosPromise<API.InlineResponse201>;
        deleteOnePost(postid: string, options?: any): axios.AxiosPromise<void>;
        flagPostAsFinished(postid: string, postFinishedFlagRequest: API.PostFinishedFlagRequest, options?: any): axios.AxiosPromise<void>;
        getOnePost(postid: string, options?: any): axios.AxiosPromise<API.SinglePostResponse>;
        getPosts(offset?: number | undefined, limit?: number | undefined, options?: any): axios.AxiosPromise<API.InlineResponse200>;
    };
    PostsApi: typeof API.PostsApi;
    VotesApiAxiosParamCreator: (configuration?: API.Configuration | undefined) => {
        addVote: (optionid: string, options?: any) => Promise<import("./base").RequestArgs>;
    };
    VotesApiFp: (configuration?: API.Configuration | undefined) => {
        addVote(optionid: string, options?: any): Promise<(axios?: axios.AxiosInstance | undefined, basePath?: string | undefined) => axios.AxiosPromise<API.InlineResponse2002[]>>;
    };
    VotesApiFactory: (configuration?: API.Configuration | undefined, basePath?: string | undefined, axios?: axios.AxiosInstance | undefined) => {
        addVote(optionid: string, options?: any): axios.AxiosPromise<API.InlineResponse2002[]>;
    };
    VotesApi: typeof API.VotesApi;
    Configuration: typeof API.Configuration;
};
export default _default;
