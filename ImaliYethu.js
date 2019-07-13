const sessionstorage = require("sessionstorage")
var specificmessage = "";

exports.handler = function (context, event, callback) {
    let twiml = new Twilio.twiml.MessagingResponse();
    var response = event.Body.toLowerCase();

    var Data = [{
            "government": "KwaZulu-Natal",
            "department": "Social Development",
            "programme": "Children and Families",
            "subprogramme": "Care and Services to Families",
            "financial_year": 2018,
            "budget_phase": "Main appropriation",
            "value": 16059000
        }, {
            "government": "KwaZulu-Natal",
            "department": "Social Development",
            "programme": "Children and Families",
            "subprogramme": "Child and Youth Care Centres",
            "financial_year": 2018,
            "budget_phase": "Main appropriation",
            "value": 155516000
        }, {
            "government": "KwaZulu-Natal",
            "department": "Social Development",
            "programme": "Children and Families",
            "subprogramme": "Child Care and Protection",
            "financial_year": 2018,
            "budget_phase": "Main appropriation",
            "value": 440687000
        }, {
            "government": "KwaZulu-Natal",
            "department": "Social Development",
            "programme": "Children and Families",
            "subprogramme": "Community-Based Care Services for Children",
            "financial_year": 2018,
            "budget_phase": "Main appropriation",
            "value": 122688000
        }, {
            "government": "KwaZulu-Natal",
            "department": "Social Development",
            "programme": "Children and Families",
            "subprogramme": "ECD and Partial Care",
            "financial_year": 2018,
            "budget_phase": "Main appropriation",
            "value": 534449000
        }, {
            "government": "KwaZulu-Natal",
            "department": "Social Development",
            "programme": "Children and Families",
            "subprogramme": "Management and Support",
            "financial_year": 2018,
            "budget_phase": "Main appropriation",
            "value": 121690000
        }, {
            "government": "KwaZulu-Natal",
            "department": "Social Development",
            "programme": "Social Welfare Services",
            "subprogramme": "HIV and AIDS",
            "financial_year": 2018,
            "budget_phase": "Main appropriation",
            "value": 234953000
        }, {
            "government": "KwaZulu-Natal",
            "department": "Social Development",
            "programme": "Social Welfare Services",
            "subprogramme": "Management and Support",
            "financial_year": 2018,
            "budget_phase": "Main appropriation",
            "value": 214892000
        }, {
            "government": "KwaZulu-Natal",
            "department": "Social Development",
            "programme": "Social Welfare Services",
            "subprogramme": "Services to Older Persons",
            "financial_year": 2018,
            "budget_phase": "Main appropriation",
            "value": 163473000
        }, {
            "government": "KwaZulu-Natal",
            "department": "Social Development",
            "programme": "Social Welfare Services",
            "subprogramme": "Services to Persons with Disabilities",
            "financial_year": 2018,
            "budget_phase": "Main appropriation",
            "value": 143063000
        }, {
            "government": "KwaZulu-Natal",
            "department": "Social Development",
            "programme": "Social Welfare Services",
            "subprogramme": "Social Relief",
            "financial_year": 2018,
            "budget_phase": "Main appropriation",
            "value": 15972000
        }, {
            "government": "KwaZulu-Natal",
            "department": "Health",
            "programme": "District Health Services",
            "subprogramme": "HIV and AIDS",
            "financial_year": 2018,
            "budget_phase": "Main appropriation",
            "value": 5677225000
        }, {
            "government": "KwaZulu-Natal",
            "department": "Health",
            "programme": "District Health Services",
            "subprogramme": "HIV and AIDS",
            "financial_year": 2019,
            "budget_phase": "Medium Term Estimates",
            "value": 6114218000
        }, {
            "government": "KwaZulu-Natal",
            "department": "Health",
            "programme": "District Health Services",
            "subprogramme": "HIV and AIDS",
            "financial_year": 2020,
            "budget_phase": "Medium Term Estimates",
            "value": 6701673000
        },
        {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Children and Families",
                "subprogramme": "Care and Services to Families",
                "financial_year": 2018,
                "budget_phase": "Main appropriation",
                "value": 85428000
            },
            {
                "government": "Eastern Cape",
                "department": "Education",
                "programme": "EARLY CHILDHOOD DEVELOPMENT",
                "subprogramme": "Grade R in Public Schools",
                "financial_year": 2018,
                "budget_phase": "Main appropriation",
                "value": 759723362.3464689
            },
            {
                "government": "Eastern Cape",
                "department": "Education",
                "programme": "EARLY CHILDHOOD DEVELOPMENT",
                "subprogramme": "Grade R in Public Schools",
                "financial_year": 2019,
                "budget_phase": "Medium Term Estimates",
                "value": 806569000
            },
            {
                "government": "Eastern Cape",
                "department": "Education",
                "programme": "EARLY CHILDHOOD DEVELOPMENT",
                "subprogramme": "Grade R in Public Schools",
                "financial_year": 2020,
                "budget_phase": "Medium Term Estimates",
                "value": 851883000
            },
            {
                "government": "Eastern Cape",
                "department": "Education",
                "programme": "EARLY CHILDHOOD DEVELOPMENT",
                "subprogramme": "PRE-GRADE R TRAINING",
                "financial_year": 2018,
                "budget_phase": "Main appropriation",
                "value": 23324783.6488036
            },
            {
                "government": "Eastern Cape",
                "department": "Education",
                "programme": "EARLY CHILDHOOD DEVELOPMENT",
                "subprogramme": "PRE-GRADE R TRAINING",
                "financial_year": 2019,
                "budget_phase": "Medium Term Estimates",
                "value": 24855000
            },
            {
                "government": "Eastern Cape",
                "department": "Education",
                "programme": "EARLY CHILDHOOD DEVELOPMENT",
                "subprogramme": "PRE-GRADE R TRAINING",
                "financial_year": 2020,
                "budget_phase": "Medium Term Estimates",
                "value": 26442000
            },
            {
                "government": "Eastern Cape",
                "department": "Education",
                "programme": "INFRASTRUCTURE DEVELOPMENT",
                "subprogramme": "Special Schools",
                "financial_year": 2018,
                "budget_phase": "Main appropriation",
                "value": 76030746
            },
            {
                "government": "Eastern Cape",
                "department": "Education",
                "programme": "INFRASTRUCTURE DEVELOPMENT",
                "subprogramme": "Special Schools",
                "financial_year": 2019,
                "budget_phase": "Medium Term Estimates",
                "value": 27241000
            },
            {
                "government": "Eastern Cape",
                "department": "Education",
                "programme": "INFRASTRUCTURE DEVELOPMENT",
                "subprogramme": "Special Schools",
                "financial_year": 2020,
                "budget_phase": "Medium Term Estimates",
                "value": 35932000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Children and Families",
                "subprogramme": "Child and Youth Care Centers",
                "financial_year": 2018,
                "budget_phase": "Main appropriation",
                "value": 116720700
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Children and Families",
                "subprogramme": "Child and Youth Care Centers",
                "financial_year": 2019,
                "budget_phase": "Medium Term Estimates",
                "value": 124202000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Children and Families",
                "subprogramme": "Child and Youth Care Centers",
                "financial_year": 2020,
                "budget_phase": "Medium Term Estimates",
                "value": 131665000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Children and Families",
                "subprogramme": "Child Care and Protection",
                "financial_year": 2018,
                "budget_phase": "Main appropriation",
                "value": 203317000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Children and Families",
                "subprogramme": "Child Care and Protection",
                "financial_year": 2019,
                "budget_phase": "Medium Term Estimates",
                "value": 231296000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Children and Families",
                "subprogramme": "Child Care and Protection",
                "financial_year": 2020,
                "budget_phase": "Medium Term Estimates",
                "value": 248785000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Children and Families",
                "subprogramme": "Community - Based Care Services for children",
                "financial_year": 2018,
                "budget_phase": "Main appropriation",
                "value": 43946000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Children and Families",
                "subprogramme": "Community - Based Care Services for children",
                "financial_year": 2019,
                "budget_phase": "Medium Term Estimates",
                "value": 47462000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Children and Families",
                "subprogramme": "Community - Based Care Services for children",
                "financial_year": 2020,
                "budget_phase": "Medium Term Estimates",
                "value": 49846000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Development and Research",
                "subprogramme": "Youth Development",
                "financial_year": 2018,
                "budget_phase": "Main appropriation",
                "value": 55328000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Development and Research",
                "subprogramme": "Youth Development",
                "financial_year": 2019,
                "budget_phase": "Medium Term Estimates",
                "value": 59129000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Development and Research",
                "subprogramme": "Youth Development",
                "financial_year": 2020,
                "budget_phase": "Medium Term Estimates",
                "value": 62873000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Restorative Services",
                "subprogramme": "Management and Support",
                "financial_year": 2018,
                "budget_phase": "Main appropriation",
                "value": 20586000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Restorative Services",
                "subprogramme": "Management and Support",
                "financial_year": 2019,
                "budget_phase": "Medium Term Estimates",
                "value": 22025000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Restorative Services",
                "subprogramme": "Management and Support",
                "financial_year": 2020,
                "budget_phase": "Medium Term Estimates",
                "value": 23435000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Restorative Services",
                "subprogramme": "Substance Abuse, Prevention and Rehabilitation",
                "financial_year": 2018,
                "budget_phase": "Main appropriation",
                "value": 81165000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Restorative Services",
                "subprogramme": "Substance Abuse, Prevention and Rehabilitation",
                "financial_year": 2019,
                "budget_phase": "Medium Term Estimates",
                "value": 86608000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Restorative Services",
                "subprogramme": "Substance Abuse, Prevention and Rehabilitation",
                "financial_year": 2020,
                "budget_phase": "Medium Term Estimates",
                "value": 91901000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Restorative Services",
                "subprogramme": "Crime Prevention and Support",
                "financial_year": 2018,
                "budget_phase": "Main appropriation",
                "value": 202513000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Restorative Services",
                "subprogramme": "Crime Prevention and Support",
                "financial_year": 2019,
                "budget_phase": "Medium Term Estimates",
                "value": 216522000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Restorative Services",
                "subprogramme": "Crime Prevention and Support",
                "financial_year": 2020,
                "budget_phase": "Medium Term Estimates",
                "value": 230182000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Restorative Services",
                "subprogramme": "Victim Empowerment",
                "financial_year": 2018,
                "budget_phase": "Main appropriation",
                "value": 113332000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Restorative Services",
                "subprogramme": "Victim Empowerment",
                "financial_year": 2019,
                "budget_phase": "Medium Term Estimates",
                "value": 122941000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Restorative Services",
                "subprogramme": "Victim Empowerment",
                "financial_year": 2020,
                "budget_phase": "Medium Term Estimates",
                "value": 119040000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Social Welfare Services",
                "subprogramme": "HIV and AIDS",
                "financial_year": 2018,
                "budget_phase": "Main appropriation",
                "value": 133845000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Social Welfare Services",
                "subprogramme": "HIV and AIDS",
                "financial_year": 2019,
                "budget_phase": "Medium Term Estimates",
                "value": 143951000
            },
            {
                "government": "Eastern Cape",
                "department": "Social Development",
                "programme": "Social Welfare Services",
                "subprogramme": "HIV and AIDS",
                "financial_year": 2020,
                "budget_phase": "Medium Term Estimates",
                "value": 153102000
            }
        
    ];
    var no = "";
    for (var i = event.From.indexOf('+'); i < event.From.length; i++) {
        no += event.From[i];
    }
    var torreturn = "Hello 😊, we hope the information below is of help \n \n";
    var problemAns = ["Leaking Sewage", "Electricity Problems", "Water Problems", "Funding", "Initiatives", "Custom"];
    if(response === "keywords"){
        message="These are the available search words on ImaliYethu 🔍,  *N.B. To use these words pick anyone of the terms contained in the keyword e.g. in  Based Care Services for children we can use the term 💓 Care💓 or 🧒🏾children🧒🏾 when searching i.e. search: care or search: children *\n \n";
        var list =[];
        for (var i = 0; i < Data.length; i++) {
            if(!list.includes(Data[i].subprogramme)){
                list.push(Data[i].subprogramme);
            }     
        }
        for(var i=0; i < list.length;i++){
            message += "search: " + list[i] + "\n \n"; 
        }

        twiml.message(message);
        callback(null, twiml);
    }
    else if (response.includes("description")) {
        var proDescript = response.split("\n");
        specificmessage = "Your query ✍️ has been submitted ✔️will respond in due time over whatsApp using this number have a good day 🙏";
        twiml.message(specificmessage);
        var date = new Date(new Date().getTime() + (Math.floor(Math.random() * 35) * 24 * 60 * 60 * 1000));
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        message = "Hello 😊 \n Your Apllication  \n " + response + " \n Has been reviewed 😊  a representative will be visiting  " + proDescript[1] + " on the \n " + "Day: " + day + "\n Month: " + monthNames[monthIndex] + "\n Year: " + year + "\n Time: 10am \n to discuss the above issue the representative will give your call to discuss further details";
        twiml.message(message);
        setTimeout(() => callback(null, twiml), 70000);
    }
    if (response.includes("answer")) {
        var ans = response.split(" ");
        var index = ans[1];
        if(response.includes(":")){
         index = index=== "a"? 3:index === "b"? 4:5;
        }
        else{
        index = index === "a" ? 0 : index === "b" ? 1 : 2;
        }
        specificmessage = "Please send us a description the " + problemAns[index] + " in the following format \n" + "*Problem: " + problemAns[index] + "*\n" + "*Location: the name of your town or village e.g. Mtubatuba*" + "\n *Description: your explanation of the problem your town/village is currently facing*";
        twiml.message(specificmessage);
    } else if (response.includes("action")) {
        index = response.indexOf(":");
        if (index !== null || index !== -1) {
            string = "";
            for (i = index + 1; i < response.length; i++) {
                if (response[i] !== " ") {
                    string += response[i];
                }
            }
            response = string;
        } else {
            var split = response.split(" ");
            response = split[split.length - 1]; //@dev safer
        }
        //keyword ="report";

        switch (response.toLowerCase()) {
            case "report":
                var requestsList = JSON.parse(sessionstorage.getItem("requests"));
                specificmessage = "What would you like to report \n a. Leaking sewage \n b. Electricity Problems \n c. Water Problems   \n *Please respond with  the term answer followed by the letter of the problem for e.g. answer a* \n \n *Ensure the format matches the example*";
                twiml.message(specificmessage);
                break;
            case "apply":
                specificmessage = "What would you like to apply for: \n a. Funding \n b. Initiatives \n c. Custom   \n *Please respond with  the term answer followed by the letter of the problem for e.g. answer: a*   \n \n *Ensure the format matches the example*";
                twiml.message(specificmessage);
                break;
        }
    } else if (response.includes("search")) {

        index = response.indexOf(":");
        if (index !== null || index !== -1) {
            string = "";
            for (i = index + 1; i < response.length; i++) {
                if (response[i] !== " ") {
                    string += response[i];
                }
            }
          //  twiml.message(string);


            response = string;
        } else {
            split = response.split(" ");
            response = split[split.length - 1]; //@dev safer
        }
        var found = false;
        var count=0;
        for (var i = 0; i < Data.length && count<7; i++) {
            if (Data[i].subprogramme.toLowerCase().includes(response)) {
                found = true;
                count++;
                torreturn += "\n Province: "+Data[i].government  +"\n Programme name: " + Data[i].subprogramme + " \n Deparment:" + Data[i].department + "\n Amount: R" + Data[i].value + "\n Financial Year: " + Data[i].financial_year + "\n \n";
            }
        }
        if (!found) {
            twiml.message("Hello 😊 \n No information exists about the cause " + response+"  😥 ");
        } else {
            torreturn += "Thank you 😊";
            twiml.message(torreturn);

        }
    }
    else if (response === "vuleka") {
        specificmessage = "Hello 😊, \n Welcome to ImaliYethu whatsApp service, we aim at providing budget data to the marginalized population \n *This is a beta version of the service all options listed work but because of the low resourced test servers some may not function accordingly because they use up to much resources* \n \n\n \n \n We can assist you in the following ways\n a. Help you get specific amounts allocated to your province for specific causes to use this feature just send a whatsApp message with the keyword e.g. *search: hiv*  \n \n \n b. Apply for assistance to use this feature simply send a whatsApp with the key word *action: apply* \n *we will then be able to channel the application accordingly*  \n \n \n c. Report problems in your area directly to the us for awareness and action to do this simply send a whatsApp message with the keyword *action: report* \n \n d. View available search keys thus far by sending a WhatsApp with the keyword *keywords* \n \n*N.B. ⚠️⚠️⚠️⚠️⚠️Please ensure you follow the correct syntax specified for each option⚠️⚠️⚠️⚠️*";
        twiml.message(specificmessage);
    }
    callback(null, twiml);

};
