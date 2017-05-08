Given(/^User going to google homepage and search$/) do
	$driver.get 'https://www.google.co.in/'
 
end
When(/^User give a youtube input field$/) do
	$driver.find_element(:xpath,'//*[@id="lst-ib"]').send_keys('youtube')
	sleep 10;
 
end

When(/^User give a empty input field$/) do
  # puts "User give a empty input field"
  $driver.find_element(:xpath,'//*[@id="lst-ib"]').click
  pending # Write code here that turns the phrase above into concrete actions
end

When(/^User hit search button$/) do
  $driver.find_element(:xpath,'//*[@id="tsf"]/div[2]/div[3]/center/input[1]').click
 
end

Then(/^User should see the ENTER THE CONTENT error message$/) do
	$driver.find_element(:xpath,'//*[@id="sb_ifc0"]').click
	$driver.find_element(:xpath,'//*[@id="tsf"]/div[2]/div[3]/center/input[1]').click
 
end
