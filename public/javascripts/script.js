let redirectURI = "https://mobileidentity.ackapp.com"
let buttonURL = "https://redirect.ackapp.com/"
$(function() {
    let query = []
    let currentBrowser = bwcheck()
    console.log(currentBrowser)
    query.push(`redirectURI=${redirectURI}`)
    if(currentBrowser) {
        $("#browser").html(`Current Browser: ${currentBrowser}`)
        query.push(`browser=${encodeURIComponent(currentBrowser)}`)
        $('#bwm-link').attr('href', `${buttonURL}?${query.join("&")}`)
    }
})