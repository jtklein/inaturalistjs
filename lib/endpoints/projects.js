"use strict";
var iNaturalistAPI = require( "../inaturalist_api" ),
    Project = require( "../models/project" );

var projects = class projects {
  static fetch( ids ) {
    return iNaturalistAPI.fetch( "projects", ids ).
      then( Project.typifyResultsResponse );
  }

  static autocomplete( params ) {
    return iNaturalistAPI.get( "projects/autocomplete", params ).
      then( Project.typifyResultsResponse );
  }

  static create( params, options ) {
    return iNaturalistAPI.upload( "projects", params, options ).
      then( Project.typifyInstanceResponse );
  }

  static update( params, options ) {
    return iNaturalistAPI.
      upload( "projects/:id", params, Object.assign( { }, options, { method: "put" } ) ).
      then( Project.typifyInstanceResponse );
  }

  static delete( params, options ) {
    return iNaturalistAPI.delete( "projects/:id", params, options );
  }

  static join( params, options ) {
    return iNaturalistAPI.post( "projects/:id/join", params, options );
  }

  static leave( params, options ) {
    return iNaturalistAPI.delete( "projects/:id/leave", params, options );
  }

  static add( params, options ) {
    return iNaturalistAPI.post( "projects/:id/add", params, options );
  }

  static remove( params, options ) {
    return iNaturalistAPI.delete( "projects/:id/remove", params, options );
  }

  static posts( params, options ) {
    return iNaturalistAPI.get( "projects/:id/posts", params, options );
  }

  static subscribe( params, options ) {
    return iNaturalistAPI.post( "subscriptions/Project/:id/subscribe", params, options );
  }

  static subscriptions( params, options ) {
    return iNaturalistAPI.get( "projects/:id/subscriptions", params,
      iNaturalistAPI.optionsUseAuth( options ) );
  }

  static followers( params, options ) {
    return iNaturalistAPI.get( "projects/:id/followers", params, options );
  }

};

module.exports = projects;
