Feature: GOOGLE
	
	Scenario:User select empty search
	Given User going to google homepage and search
	When User give a youtube input field
	And User hit search button
	Then User should see the ENTER THE CONTENT error message
