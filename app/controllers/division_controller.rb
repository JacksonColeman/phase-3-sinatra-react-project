class DivisionController < ApplicationController
    #Read Divisions
    get "/divisions/" do
        divisions = Division.all
        divisions.to_json
    end

    #Read Divisions
    get "/divisions/:id" do
        division = Division.find(params[:id])
        division.to_json
    end

    #Read Teams in Division
    get "/divisions/:id/teams/" do
        division_teams = Division.find(params[:id]).teams
        division_teams.to_json
    end

    #Create Team in Division
    post "/divisions/:id/teams/" do
        newteam = Team.create(name: params[:name], location: params[:location], 
        founded: params[:founded], division_id: params[:id])
        newteam.to_json
    end
end