puts "🌱 Seeding spices..."

# Seed your database here
#Leagues
nl = League.create(name: "National League", founded: 1876)
al = League.create(name: "American League", founded: 1901)

#Divisions
nlc = Division.create(name: "NL Central", founded: 1994, league_id: nl.id)
nle = Division.create(name: "NL East", founded: 1969, league_id: nl.id)
nlw = Division.create(name: "NL West", founded: 1969, league_id: nl.id)
alc = Division.create(name: "AL Central", founded: 1994, league_id: al.id)
ale = Division.create(name: "AL East", founded: 1969, league_id: al.id)
alw = Division.create(name: "AL West", founded: 1969, league_id: al.id)

#Teams
cubs = Team.create(name: "Cubs", location: "Chicago", founded: 1876, division_id: nlc.id)
cardinals = Team.create(name: "Cardinals", location: "St. Louis", founded: 1882, division_id: nlc.id)
brewers = Team.create(name: "Brewers", location: "Milwaulkee", founded: 1969, division_id: nlc.id)
reds = Team.create(name: "Reds", location: "Cincinnatti", founded: 1881, division_id: nlc.id)
pirates = Team.create(name: "Pirates", location: "Pittsburgh", founded: 1882, division_id: nlc.id)

#Stadiums
Stadium.create(name: "Wrigley Field", location: "Chicago", image: "https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1240/MTY4MTcyNTcyMjg2MTk5MTY4/image-placeholder-title.webp", built: 1914, capacity:41649, team_id: cubs.id)
Stadium.create(name: "Busch Stadium", location: "St. Louis", image: "https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1240/MTY4MTcyNTcyNTU0NTAzNTUy/image-placeholder-title.webp", built: 2006, capacity:45494, team_id: cardinals.id)

#Positions
Position.create(id: 1, abbrev: "P", full_name: "Pitcher")
Position.create(id: 2, abbrev: "C", full_name: "Catcher")
Position.create(id: 3, abbrev: "1B", full_name: "First Base")
Position.create(id: 4, abbrev: "2B", full_name: "Second Base")
Position.create(id: 5, abbrev: "3B", full_name: "Third Base")
Position.create(id: 6, abbrev: "SS", full_name: "Shortstop")
Position.create(id: 7, abbrev: "LF", full_name: "Left Field")
Position.create(id: 8, abbrev: "CF", full_name: "Center Field")
Position.create(id: 9, abbrev: "RF", full_name: "Right Field")

#Creating Players
Player.create(first_name: "Nico", last_name: "Hoerner", age: 25, image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/663538/headshot/67/current", batting_average: 0.281, position_id: 6, team_id: cubs.id)

# for player age
player_age = Rubystats::NormalDistribution.new(27,3)
player_ba = Rubystats::NormalDistribution.new(0.244, 0.027)

for team in Team.all
    for pos in 1..9
        Player.create(first_name: Faker::Name.male_first_name, last_name: Faker::Name.last_name, age: player_age.rng.round, batting_average: player_ba.rng.round(3), position_id: pos, team_id: team.id)
    end
end


puts "✅ Done seeding!"
