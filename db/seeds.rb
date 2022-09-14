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

#Stadiums
Stadium.create(name: "Wrigley Field", location: "Chicago", built: 1914, capacity:41649, team_id: cubs.id)

#Players
Player.create(first_name: "Nico", last_name: "Hoerner", age: 25, batting_average: 0.281, position_id: 6, team_id: cubs.id)

#Positions
Position.create(id: 6, abbrev: "SS", full_name: "Shortstop")

puts "✅ Done seeding!"
