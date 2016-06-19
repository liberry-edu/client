var learningTrack = ["Digital Sakshar", "Empoyment Awareness", "H-Learning", "Soft Skills"];
var subCategory = ["Activities", "Orientation", "Syllabus"];
var verticals = ["Automotive", "Beauty", "Bedside Assistance", "Construction", "Electrician", "Hospitality"];

//Video List of all Folders
var autoActVL = ["1 ओळख आि ण टॅग लावणे.mp4", "2 टॅग लावणे.mp4", "3 जरनल चेकअप.mp4","4 आईल चेकअप.mp4","5 टायर प्रेशर गेज.mp4","6 टायर पंक्‍चर काढणे.mp4","7 ट्यूबलेस टायर पंक्‍चर.mp4","8 टेल लाईट.mp4","9 बॅटरी, एअर िक्‍लनर ,कुलंट वॉटर ,वायपर मोटर टॅक.mp4","10 स्टेफनी.mp4","11 हेड लाईट.mp4"];
var autoActVC = ["1.mp4","2.mp4","3.mp4","4.mp4","5.mp4","6.mp4","7.mp4","8.mp4","9.mp4","10.mp4","11.mp4"];
var autoOriVL = ["Automobile.mp4"];
var autoOriVC = [];
var autoSylVC = ["Automobile Safety.mp4","Engine Oil Change.mp4","General Checkup.mp4","Learn about Tyres.mp4","Repair a Tyre Puncture.mp4"];
var autoSylVL = ["1.mp4","2.mp4","3.mp4","4.mp4","5.mp4"];
var autoSucVL = ["Automob_sagar.mp4"];
var autoSucVC = [];

var beauActVL = ["1 उत्पादनंाची माहीती.mp4","2 आय ब्रो.mp4","3 फेस शेप.mp4","4 मेकअप.mp4","5 स्कीन.mp4","केसांची निगा.mp4"];
var beauActVC = ["1.mp4","2.mp4","3.mp4","4.mp4","5.mp4","6.mp4"];
var beauOriVL = ["Beauty.mp4"];
var beauOriVC = [];
var beauSylVL = ["Facial.mp4","Manicure.mp4","PCH.mp4","Pedicure.mp4","Shampooing.mp4","Threading.mp4","Waxing.mp4"];
var beauSylVC = [];
var beauSucVL = ["Beauty.mp4","Sanghamitra.mp4"];
var beauSucVC = ["BEAUTY"];

var bedActVL = ["1.mp4", "नाडी_तपासणे.mp4", "बेड_मेकिंग.mp4", "बेड_साईड_अस्सिस्टंट_ची_ओळख.mp4", "ब्लड_प्रेशर_चेक_करणे.mp4", "वयोवृद्धांची_काळजी.mp4", "हाथ_स्वछ_करणे.mp4"];
var bedActVC = ["1.mp4", "2.mp4", "3.mp4", "4.mp4", "5.mp4", "6.mp4", "7.mp4"];
var bedOriVL = ["Bedside-Assistant.mp4"];
var bedSylVL = ["AUTO CLAVE (Hindi).mp4","Bed making (Hindi).mp4","Hand Wash (Hindi).mp4","Temperature (Hindi).mp4"];
var bedSucVL = ["Bedside.mp4"];

var conActVL = [];
var conActVC = [];
var conOriVL = ["Construction.mp4"];
var conSylVL = ["ओळंबाचा_उपयोग.mp4","कंस्ट्रक्शन.mp4","मोजमाप_घेणे.mp4","रिंग_तयार_करणे.mp4","वस्तूंची_ओळख_आणि_टॅग_लावणे.mp4"];
var conSylVC = ["1.mp4","2.mp4","3.mp4","4.mp4","5.mp4"];
var conSucVL = [];

var elecActVL = ["वस्तूंची_ओळख_आणि_टॅग_लावणे.mp4", "कंन्टिन्यूटी_लॅम्प.mp4", "थ्री_फेज_व_सिंगल_फेज_चेक_करणे.mp4", "सर्कीट_तयार_करणे.mp4", "फ्यूज़_तयार_करणे.mp4"];
var elecActVC = ["1.mp4", "2.mp4", "3.mp4", "4.mp4", "5.mp4"];
var elecOriVL = ["Electrical.mp4"];
var elecSylVL = ["इलेक्ट्रिक टुल्स भाग 1.mp4","इलेक्ट्रिक टुल्स भाग 2.mp4","इलेक्ट्रिक टुल्स भाग 3.mp4","इलेक्ट्रीकल काम करताना घ्यावयाची दक्षता.mp4","थ्री पीन सॉकेट टेस्टिंग.mp4","थ्री पीन सॉकेट वायरिंग.mp4","थ्री पीन सॉकेट वायरिंग.mp4","थ्री पीन सॉकेट.mp4","सिरीज टेस्ट लॅम्प.mp4"];
var elecSylVC = ["1.mp4","2.mp4","3.mp4","4.mp4","5.mp4","6.mp4","7.mp4","8.mp4","9.mp4"];
var elecSucVL = ["Electrical.mp4"];

var hospActVL = ["1 वस्तूंची_ओळख_आणि_टॅग_लावणे.mp4", "2 वूडन_सरफेस_क्लिनिंग.mp4", "3 मिरर_सरफेस_क्लिनिंग.mp4", "4 मार्बल_सरफेस_क्लिनिंग.mp4", "5 बेड_तयार_करणे.mp4", "6 टॉवेल_आर्ट.mp4", "7 वस्तूंची_ओळख_आणि_टॅग_लावणे.mp4", "8 टेबल_सेट_अप.mp4", "9 टेबल_सर्विस.mp4"];
var hospActVC = ["1.mp4", "2.mp4", "3.mp4", "4.mp4", "5.mp4", "6.mp4", "7.mp4", "8.mp4", "9.mp4"];
var hospOriVL = ["Departments of a Hotel.mp4","Discussion with industry experts - II.mp4","Discussion with industry experts.mp4","Discussion with Taj industry expert.mp4","Hospitality Intro.mp4","Hotel Industry.mp4"];
var hospSylVC = ["F&B Syllabus.mp4","Food production syllabus.mp4","Housekeeping syllabus.mp4","Bathroom cleaning.mp4","Bed making.mp4","Bread rolls recipe.mp4","Buns recipe.mp4","Cake icing.mp4","Dinner.mp4","Dusting.mp4","Floor Cleaning.mp4","Guest room cleaning.mp4","Inhouse Cleaning Equipments.mp4","Muffins recipe.mp4","Outdoor Cleaning Equipments.mp4","Room Arrangement.mp4","Table set up.mp4","Table setup long.mp4","Veg Puffs recipe.mp4"];
var hospSylVL = ["1.mp4","2.mp4","3.mp4","4.mp4","5.mp4","6.mov","7.mov","8.mov","9.mp4","10.mp4","11.mp4","12.mp4","13.mp4","14.mov","15.mp4","16.mp4","17.mp4","18.mp4","19.mov"];
var hospSucVL = ["mangal_and_Devi_hospitality.mp4"];

var assessment = ["DigitalSakshar_syllabus.xls",  "IDI_Practical_Hindi.pdf", "IDI_Practical_Marathi.pdf", "Theory_M1_Marathi.pdf", "Theory_M2_Marathi.pdf", "Theory_M3_Marathi.pdf"];

var navVar;

var softSkillVC = ["1 Meeting Rahul.mp4","1.2 knowing more about each other.mp4","1.3 Meeting Madhu and Deepak.mp4","1.4 Knowing Madhu and Deepak.mp4","1.5 Talking to new friends.mp4","1.6 Revision - Meeting Rahul.mp4","1.7 Revision Meeting Deepak and Madhu.mp4","2.1 Meeting Rahul’s parents.mp4","2.2 Meeting Rahul’s parents in the evening.mp4","2.3 Two families meet.mp4","2.4 New friendship.mp4","2.5 Our dear Family.mp4","3.1 New guy in town.mp4","3.2 lunch with dolly.mp4","3.3 Seemas questions.mp4","3.4 Where is everyone.mp4","3.5 Seema runs into dolly.mp4","3.6 Seema meets Dolly #919B.mp4","4.1 Favorite actors.mp4","4.2 Fight of fans.mp4","4.3 Going to the movie.mp4","4.4 Discussion about the movie.mp4","4.5 Likes and dislikes#4BB7.mp4","4.6 Likes and dislikes - Deepak and Rahul (Revison).mp4","5.1 Good Morning.mp4","5.2 On the way to school.mp4","5.3 Time Pass.mp4","5.4 Birthdays in one day.mp4","5.5 Running race.mp4","5.6 Revision Nisha's plans.mp4","6.1 Shopping.mp4","6.2 Ramu kaka's shop.mp4","6.3 Grocery shopping.mp4","6.4 Shopping.mp4","6.5 Revision - Ramu kaka's shop.mp4","7.1 Story Slection.mp4","7.2 Big plans for the movie.mp4","7.3 Deciding the roles.mp4","7.4 Shooting.mp4","8.1 Wedding News.mp4","8.2Inviting my friends.mp4","8.3 Colorful wedding clothes.mp4","8.4 Salma didi's Party.mp4","9.01 Today's news with Kavita.mp4","9.02 My friend's interview","9.03 Mummy's interview.mp4","Decision making activity.mp4","Election activity.mp4","Mirror activity.mp4","Presentation skills.mp4","Story making activity.mp4","True and Lie activity.mp4","दोस्ती की ट्रेन.mp4","रंगीन दुनिया भाग 1.mp4","रंगीन दुनिया भाग 2.mp4","रिश्ते - हमारे परिवार में और गणित में - 1.mp4","रिश्ते - हमारे परिवार में और गणित में - 2.mp4"];
var softSkillVL = ["1.mp4","1.2.mp4","1.3.mp4","1.4.mp4","1.5.mp4","1.6.mp4","1.7.mp4","2.1.mp4","2.2.mp4","2.3.mp4","2.4.mp4","2.5.mp4","3.1.mp4","3.2.mp4","3.3.mp4","3.4.mp4","3.5.mp4","3.6.mp4","4.1.mp4","4.2.mp4","4.3.mp4","4.4.mp4","4.5.mp4","4.6.mp4","5.1.mp4","5.2.mp4","5.3.mp4","5.4.mp4","5.5.mp4","5.6.mp4","6.1.mp4","6.2.mp4","6.3.mp4","6.4.mp4","6.5.mp4","7.1.mp4","7.2.mp4","7.3.mp4","7.4.mp4","8.1.mp4","8.2.mp4","8.3.mp4","8.4.mp4","9.01.mp4","9.02.mp4","9.03.mp4","Decision_making_activity.mp4","Election_activity.mp4","Mirror_activity.mp4","Presentation_skills.mp4","Story_making_activity.mp4","True_and_Lie_activity.mp4","a.mp4","b1.mp4","b2.mp4","c1.mp4","c2.mp4"];


var indexElement = "<div class='content-grid'>"+
				"<a href='single.html' class='b-link-stripe b-animate-go  thickbox'>"+
					"<img  src='images/pi.jpg' />"+
						"<div class='b-wrapper'>"+
							"<h2 class='b-animate b-from-left    b-delay03 '>"+
								"<span>"+navVar+"</span>"+
								"<p>explore learn grow</p>"+
							"</h2>"+
						"</div>"+
				"</a>"+
			"</div>";
                

var vidLink = "";

var vidListElement =    '<div class="col-d">'+
            '<a href="vidPlayer.html?vidVar='+ vidLink +'" ><img src="images/bl1.jpg"  /></a>'+
            '<div class="blog-in">'+
            '<h5><a href="vidPlayer.html?vidVar='+ vidLink +'">Gallery Post Example</a></h5>'+
            '<p>Video Description </p>'+
            '<ul class="date">'+
            '<li><span><a href="#"><i ></i>12 Comments/Instructions</a></span></li>'+
            '<li><span><i class="date-in"></i>09-07-2013</span></li>'+
							'</ul>'+
						'</div>'+
					'</div>';            


var videos = '1,2,3,4,5'.split(',');

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
 
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
 
    return vars;
}




