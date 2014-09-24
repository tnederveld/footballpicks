/**
 *
 * Created by MannyOrtiz on 9/21/14.
 */
NFLPicks.Team = Backbone.Model.extend({
});

NFLPicks.TeamCollection = Backbone.Collection.extend({
    model: NFLPicks.Team
});

NFLPicks.TeamView = Backbone.View.extend({
    tagName: "li",
    initialize: function(){
        this.render();
    },

    events : {
        'click' : 'showAlert'
    },

    showAlert : function(){
        alert("You clicked me!");
    },

    my_template: _.template("<strong><%= name %></strong> : <%= location %>"),

    render: function(){
        this.$el.html(this.my_template(this.model.toJSON()));
        return this;
    }
});

NFLPicks.TeamCollectionView = Backbone.View.extend({
    tagName : "ul",

    initialize : function(){
        this.collection.on('add', this.addOne, this);
    },

    render : function(){
        var teamList = [];
        this.collection.each(function(team){
            var teamView = new NFLPicks.TeamView({model:team});
            teamList.push(teamView.el);
        },this);
        var myHtml = this.$el.append(teamList);
        $('#fixedCase').html(myHtml);
        return this;
    },

    addOne : function(team){
        var teamView = new NFLPicks.TeamView({ model: team });
        this.$el.append(teamView.render().el);
    }
});

NFLPicks.AddTeam = Backbone.View.extend({
    el: '#addTeam',

    initialize : function(){
    },

    events : {
       submit : 'submit'
    },

    submit : function(e){
        e.preventDefault();
        var newName = $('#name').val();
        var newShort = $('#shortName').val();
        var newLoc = $('#location').val();
        var newConf = $('#conference').val();
        var newDiv = $('#division').val();

        var newTeam = new NFLPicks.Team({
          name : newName,
          shortName : newShort,
          location : newLoc,
          conference : newConf,
          division : newDiv
        });

        this.collection.add(newTeam);
    }
});
