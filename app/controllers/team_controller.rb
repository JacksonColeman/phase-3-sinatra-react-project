class TeamController < ApplicationController
    get "/teams/" do
        teams = Team.all
        teams.to_json
    end

    get "/teams/:teamid" do
        team = Team.find(params[:teamid])
        team.to_json
    end

    get "/teams/:teamid/stadium" do
        stadium = Team.find(params[:teamid]).stadium
        stadium.to_json
    end

    #Read Players
    get "/teams/:teamid/players" do
        players = Team.find(params[:teamid]).players
        players.to_json
    end

    #Read Individual Player
    get "/teams/:teamid/players/:playerid" do
        player = Team.find(params[:teamid]).players.find(params[:playerid])
        player.to_json
    end

    #Create Players
    post "/teams/:teamid/players" do
        player = Player.create(playerParams)
        status 201
        player.to_json
    end

    #Update Player
    patch "/teams/:teamid/players/:playerid" do
        player = Team.find(params[:teamid]).players.find(params[:playerid])
        player.update(playerParams)
        player.to_json
    end

    #Delete Player
    delete "/teams/:teamid/players/:playerid" do
        player = Team.find(params[:teamid]).players.find(params[:playerid])
        player.destroy
        status 204
    end

    private
    def playerParams
        {first_name:params[:first_name], last_name:params[:last_name],
        age: params[:age], image: params[:image], batting_average: params[:batting_average], position_id: params[:position_id],
        team_id:params[:teamid]}
    end 

end