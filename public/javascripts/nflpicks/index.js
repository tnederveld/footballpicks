NFLPicks = {
    init : function(){
        var teamCollection = new NFLPicks.TeamCollection([
            {
                name : "Seattle Seahawks",
                location: "Seattle, WA"
            },
            {
                name : "Denver Broncos",
                location: "Denver, CO"
            },
            {
                name : "Tampa Bay Buccaneers",
                location: "Tampa Bay, FL"
            },
            {
                name : "Dallas Cowboys",
                location: "Dallas, TX"
            }
        ]);

        var addTeamView = new NFLPicks.AddTeam({ collection : teamCollection });
        var teamCollectionView = new NFLPicks.TeamCollectionView({ collection : teamCollection });
        teamCollectionView.render();

    }
}