var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle(anyOf(startsWith("ms"), startsWith("mo"), startsWith("c"), startsWith("f"))))));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(not natural at all)", rightComment: "(very natural)"
    },
    "Question", {
        hasCorrect: false,
        as: ["Yes", "No"]
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var equalGroupSizes = false;

var practiceItemMessage = true;

var items = [


    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "SPR_Introduction.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    
    ["sep", "Separator", { }],
    
//PRACTICE//
    ["practice", "DashedSentence", {s: "This is a practice sentence to get you used to reading sentences like this."}],
    ["practice", "DashedSentence", {s: "This is another practice sentence with a practice question following it."},
                 "Form",           {html: 'What type of sentence was that? <p><input type="text" name="SentenceType"></p>'}],    
    ["practice", "DashedSentence", {s: "This is the last practice item before the experiment begins."},
    			 "Form",		   {html: 'Are you ready to begin? <p><input type="text" name="Begin"></p>'}],
    
    ["sep", "Separator", { }], 
    
  //Uncountable Substance//
    //water//
    ["ms1-ns", "DashedSentence", {s: "Steven thought there was water all over the floor in the kitchen."},
    		   "Form",           {html: 'What was all over the floor? <p><input type="text" name="Answer"></p>'}],
    ["ms1-np", "DashedSentence", {s: "Stores often have waters for sale during the hot summer months."},
    		   "Form",           {html: 'What is for sale during the hot summer months? <p><input type="text" name="Answer"></p>'}],
    ["ms1-i",  "DashedSentence", {s: "Julie asked the waitress for a water when she came to the table."},
    		   "Form",           {html: 'What did Julie ask the waitress for? <p><input type="text" name="Answer"></p>'}],
    ["ms1-ds", "DashedSentence", {s: "Have you seen the water I put in the pool?."},
    		   "Form",           {html: 'What did I put in the pool? <p><input type="text" name="Answer"></p>'}],
    ["ms1-dp", "DashedSentence", {s: "Jeffrey saw the waters on the counter before he left for work."},
    		   "Form",           {html: 'What did Jeffrey see on the counter? <p><input type="text" name="Answer"></p>'}],
    //coffee//
    ["ms2-ns", "DashedSentence", {s: "She would like coffee with her doughnut in the morning."},
    		   "Form",           {html: 'What would she like with her doughnut? <p><input type="text" name="Answer"></p>'}],
    ["ms2-np", "DashedSentence", {s: "Allen bought coffees for everyone in the office on Friday."},
    		   "Form",           {html: 'What did Allen buy? <p><input type="text" name="Answer"></p>'}],
    ["ms2-i",  "DashedSentence", {s: "I would like to have a coffee with you tomorrow morning."},
    		   "Form",           {html: 'What do I want to have? <p><input type="text" name="Answer"></p>'}],
    ["ms2-ds", "DashedSentence", {s: "They make the coffee fresh every morning in their new restaurant."},
    		   "Form",           {html: 'What do they make fresh every morning? <p><input type="text" name="Answer"></p>'}],
    ["ms2-dp", "DashedSentence", {s: "Ashley left to get the coffees that everyone in the office ordered."},
    		   "Form",           {html: 'What did Ashley get? <p><input type="text" name="Answer"></p>'}],
    //sugar//
    ["ms3-ns", "DashedSentence", {s: "He always gets sugar in his tea when he orders it at a café."},
    		   "Form",           {html: 'What doe he get in his tea? <p><input type="text" name="Answer"></p>'}],
    ["ms3-np", "DashedSentence", {s: "The girls asked for sugars in their iced tea when they ordered it."},
    		   "Form",           {html: 'What did the girls ask for? <p><input type="text" name="Answer"></p>'}],
    ["ms3-i",  "DashedSentence", {s: "She ordered a cappuccino with a sugar from Starbucks today."},
    		   "Form",           {html: 'What did she want put in her cappuccino? <p><input type="text" name="Answer"></p>'}],
    ["ms3-ds", "DashedSentence", {s: "Don’t forget to put the sugar in the container before putting things away."},
    		   "Form",           {html: 'What needs to be put in the container? <p><input type="text" name="Answer"></p>'}],
    ["ms3-dp", "DashedSentence", {s: "Lucy asked where the sugars had been put this morning."},
    		   "Form",           {html: 'What was Lucy looking for? <p><input type="text" name="Answer"></p>'}],
    //salt//
    ["ms4-ns", "DashedSentence", {s: "The man in the corner said that he would like salt on the fries that he ordered."},
    		   "Form",           {html: 'What would the man like on his fries? <p><input type="text" name="Answer"></p>'}],
    ["ms4-np", "DashedSentence", {s: "People often add salts to their bath water in order to relax."},
    		   "Form",           {html: 'What do people often add to their bath water? <p><input type="text" name="Answer"></p>'}],
    ["ms4-i",  "DashedSentence", {s: "I asked the waiter for a salt for the food that I wanted."},
    		   "Form",           {html: 'What did I ask the waiter to put on my food? <p><input type="text" name="Answer"></p>'}],
    ["ms4-ds", "DashedSentence", {s: "He thought that the salt that he had bought tasted different."},
    		   "Form",           {html: 'What did he think tasted different? <p><input type="text" name="Answer"></p>'}],
    ["ms4-dp", "DashedSentence", {s: "Please put the salts on the table before dinner begins."},
    		   "Form",           {html: 'What needs to be put on the table before dinner? <p><input type="text" name="Answer"></p>'}],
    //toothpaste//
    ["ms5-ns", "DashedSentence", {s: "Do you have toothpaste that I can borrow for my trip?"},
    		   "Form",           {html: 'What do I want to borrow? <p><input type="text" name="Answer"></p>'}],
    ["ms5-np", "DashedSentence", {s: "I wondered if toothpastes should be made in som many different flavors."},
    		   "Form",           {html: 'What is made in different flavors? <p><input type="text" name="Answer"></p>'}],
    ["ms5-i",  "DashedSentence", {s: "He likes a toothpaste that tastes like bubble gum."},
    		   "Form",           {html: 'What does he like? <p><input type="text" name="Answer"></p>'}],
    ["ms5-ds", "DashedSentence", {s: "Where is the toothpaste that I bought earlier?"},
    		   "Form",           {html: 'What am I looking for? <p><input type="text" name="Answer"></p>'}],
    ["ms5-dp", "DashedSentence", {s: "The bought the toothpastes and put them on the counter."},
    		   "Form",           {html: 'What did he put on the counter? <p><input type="text" name="Answer"></p>'}],
    //mustard//
    ["ms6-ns", "DashedSentence", {s: "Many people think mustard is better than other condiments."},
    		   "Form",           {html: 'What is better than other condiments? <p><input type="text" name="Answer"></p>'}],
    ["ms6-np", "DashedSentence", {s: "Scientists in food labs study mustards form all over the world."},
    		   "Form",           {html: 'What is studied in food labs? <p><input type="text" name="Answer"></p>'}],
    ["ms6-i",  "DashedSentence", {s: "Jeff was looking for a mustard for his sandwich when he found something else."},
    		   "Form",           {html: 'What was Jeff looking for? <p><input type="text" name="Answer"></p>'}],
    ["ms6-ds", "DashedSentence", {s: "Where is the mustard that you brought to the party?"},
    		   "Form",           {html: 'What am I looking for? <p><input type="text" name="Answer"></p>'}],
    ["ms6-dp", "DashedSentence", {s: "I forgot to get the mustards when I was at the store earlier."},
    		   "Form",           {html: 'What did I forget to get? <p><input type="text" name="Answer"></p>'}],
  //Uncountable Object//
    //furniture//
    ["mo1-ns", "DashedSentence", {s: "Oscar put furniture in the living room, now it looks nicer."},
    		   "Form",           {html: 'What was put in the living room? <p><input type="text" name="Answer"></p>'}],
    ["mo1-np", "DashedSentence", {s: "She asked if furnitures had been purchased locally for the house."},
    		   "Form",           {html: 'What did she wonder was purchased locally? <p><input type="text" name="Answer"></p>'}],
    ["mo1-i",  "DashedSentence", {s: "There was a furniture on the floor in the other room."},
    		   "Form",           {html: 'What was on the floor? <p><input type="text" name="Answer"></p>'}],
    ["mo1-ds", "DashedSentence", {s: "Have you seen the furniture we bought for our living room?"},
    		   "Form",           {html: 'What did we buy for our living room? <p><input type="text" name="Answer"></p>'}],
    ["mo1-dp", "DashedSentence", {s: "Tanner's friends put the furnitures in their storage unit."},
    		   "Form",           {html: 'What was put in the storage unit? <p><input type="text" name="Answer"></p>'}],
    //luggage//
    ["mo2-ns", "DashedSentence", {s: "We have luggage for our travels to Europe this summer."},
    		   "Form",           {html: 'What do we have for our European travels/ <p><input type="text" name="Answer"></p>'}],
    ["mo2-np", "DashedSentence", {s: "You will need luggages for your trip to China in December."},
    		   "Form",           {html: 'What do you need for your trip to China>?<p><input type="text" name="Answer"></p>'}],
    ["mo2-i",  "DashedSentence", {s: "The family only brought a luggage with them for the trip."},
    		   "Form",           {html: 'What did the family bring with them? <p><input type="text" name="Answer"></p>'}],
    ["mo2-ds", "DashedSentence", {s: "The doorman took the luggage to our room on the fifth floor."},
    		   "Form",           {html: 'What did the doorman take to our room? <p><input type="text" name="Answer"></p>'}],
    ["mo2-dp", "DashedSentence", {s: "When John and Mary arrived, the luggages were nowhere to be found."},
    		   "Form",           {html: 'What did John and Mary lose? <p><input type="text" name="Answer"></p>'}],
    //mail//
    ["mo3-ns", "DashedSentence", {s: "The Post Office sends mail from one person to another."},
    		   "Form",           {html: 'What did the Post Office send? <p><input type="text" name="Answer"></p>'}],
    ["mo3-np", "DashedSentence", {s: "Sometimes we get mails from the postman that do not fit in our mailbox."},
    		   "Form",           {html: 'What did we get from the postman? <p><input type="text" name="Answer"></p>'}],
    ["mo3-i",  "DashedSentence", {s: "Yesterday the Post Office delivered a mail to her that was from Rome."},
    		   "Form",           {html: 'What did the Post Office deliver? <p><input type="text" name="Answer"></p>'}],
    ["mo3-ds", "DashedSentence", {s: "On Tuesdays, the mail is put in a box at the end of the hallway for the postman."},
    		   "Form",           {html: 'What is put in the box at the end of the hallway? <p><input type="text" name="Answer"></p>'}],
    ["mo3-dp", "DashedSentence", {s: "Roscoe had the Post Office hold the mails for the week that he was gone."},
    		   "Form",           {html: 'What did the Post Office hold? <p><input type="text" name="Answer"></p>'}],
    //homework//
    ["mo4-ns", "DashedSentence", {s: "The teacher assigned homework for the weekend before the holiday break."},
    		   "Form",           {html: 'What did the teacher assign? <p><input type="text" name="Answer"></p>'}],
    ["mo4-np", "DashedSentence", {s: "Please do not forget that homeworks assigned on Monday are due on Friday."},
    		   "Form",           {html: 'What is not to be forgotten? <p><input type="text" name="Answer"></p>'}],
    ["mo4-i",  "DashedSentence", {s: "Every Monday we have a homework due in Math."},
    		   "Form",           {html: 'What is due every Monday? <p><input type="text" name="Answer"></p>'}],
    ["mo4-ds", "DashedSentence", {s: "I wonder how difficult the homework for Christine's class will be."},
    		   "Form",           {html: 'What might be difficult? <p><input type="text" name="Answer"></p>'}],
    ["mo4-dp", "DashedSentence", {s: "Jessica said that the homeworks were very difficult."},
    		   "Form",           {html: 'What did Jessica say was very difficult? <p><input type="text" name="Answer"></p>'}],
    //traffic//
    ["mo5-ns", "DashedSentence", {s: "It is not very helpful when traffic delays my otherwise on-time arrival."},
    		   "Form",           {html: 'What causes a delay of my arrival? <p><input type="text" name="Answer"></p>'}],
    ["mo5-np", "DashedSentence", {s: "How often do traffics block the intersection on Main Street?"},
    		   "Form",           {html: 'What blocks the intersection at Main Street? <p><input type="text" name="Answer"></p>'}],
    ["mo5-i",  "DashedSentence", {s: "There is a traffic that has delayed the concert for an hour."},
    		   "Form",           {html: 'What has delayed the concert? <p><input type="text" name="Answer"></p>'}],
    ["mo5-ds", "DashedSentence", {s: "Did you get caught in the traffic on your way here, too?"},
    		   "Form",           {html: 'What did you get stuck in on your way here? <p><input type="text" name="Answer"></p>'}],
    ["mo5-dp", "DashedSentence", {s: "Ever since they started construction, the traffics have been terrible."},
    		   "Form",           {html: 'What has been terrible since the start of construction? <p><input type="text" name="Answer"></p>'}],
    //jewelry//
    ["mo6-ns", "DashedSentence", {s: "Unless bought during the holidays, jewelry can be very expensive."},
    		   "Form",           {html: 'What can be very expensive? <p><input type="text" name="Answer"></p>'}],
    ["mo6-np", "DashedSentence", {s: "Do you think jewelries should be sold everywhere?"},
    		   "Form",           {html: 'What should be sold everywhere? <p><input type="text" name="Answer"></p>'}],
    ["mo6-i",  "DashedSentence", {s: "Danielle had told me about a jewelry that was yellow and white gold."},
    		   "Form",           {html: 'What did Danielle tell me about? <p><input type="text" name="Answer"></p>'}],
    ["mo6-ds", "DashedSentence", {s: "Have you seen the jewelry that the bride is going to wear?"},
    		   "Form",           {html: 'What is the bride going to wear? <p><input type="text" name="Answer"></p>'}],
    ["mo6-dp", "DashedSentence", {s: "I cannot believe that the jewelries are not where I left them."},
    		   "Form",           {html: 'What did I lose? <p><input type="text" name="Answer"></p>'}],
  //Countable//
    //boy//
    ["c1-ns", "DashedSentence", {s: "He said that boy was all over the playground outside."},
    		   "Form",           {html: 'What was all over the playground? <p><input type="text" name="Answer"></p>'}],
    ["c1-np", "DashedSentence", {s: "Can you imagine boys playing in the street like that?"},
    		   "Form",           {html: 'What is playing in the street? <p><input type="text" name="Answer"></p>'}],
    ["c1-i",  "DashedSentence", {s: "I have a boy in my class who is very polite and finishes his homework on time."},
    		   "Form",           {html: 'Who is in my class? <p><input type="text" name="Answer"></p>'}],
    ["c1-ds", "DashedSentence", {s: "Jeffrey said the boy was on the bus when he saw him get sick."},
    		   "Form",           {html: 'Who was on the bus? <p><input type="text" name="Answer"></p>'}],
    ["c1-dp", "DashedSentence", {s: "I asked the boys to go to the store and get some more butter."},
    		   "Form",           {html: 'Who was asked to go to the store? <p><input type="text" name="Answer"></p>'}],
    //dog//
    ["c2-ns", "DashedSentence", {s: "I could not believe dog was all over the floor in the house."},
    		   "Form",           {html: 'What was all over the floor? <p><input type="text" name="Answer"></p>'}],
    ["c2-np", "DashedSentence", {s: "In our neighborhood, dogs are always playing in the park."},
    		   "Form",           {html: 'What is alway splaying in the park? <p><input type="text" name="Answer"></p>'}],
    ["c2-i",  "DashedSentence", {s: "Sometimes it is hard to find a dog that likes kids as much as adults."},
    		   "Form",           {html: 'What is sometimes hard to find? <p><input type="text" name="Answer"></p>'}],
    ["c2-ds", "DashedSentence", {s: "I asked you to let the dog in the house but I do not see him."},
    		   "Form",           {html: 'What do I not see? <p><input type="text" name="Answer"></p>'}],
    ["c2-dp", "DashedSentence", {s: "When I came home from work, the dogs were in the garden."},
    		   "Form",           {html: 'What was playing in the garden? <p><input type="text" name="Answer"></p>'}],
    //door//
    ["c3-ns", "DashedSentence", {s: "They could not believe that he used door for the new wall in the library."},
    		   "Form",           {html: 'What did he use for the wall in the library? <p><input type="text" name="Answer"></p>'}],
    ["c3-np", "DashedSentence", {s: "Debbie like doors that are all on the same wall."},
    		   "Form",           {html: 'What does Debbie like on the same wall? <p><input type="text" name="Answer"></p>'}],
    ["c3-i",  "DashedSentence", {s: "I think that we need to get a door for the front of the house."},
    		   "Form",           {html: 'What do we need to get for the front of the house? <p><input type="text" name="Answer"></p>'}],
    ["c3-ds", "DashedSentence", {s: "The secretary thought the door was too close to her desk."},
    		   "Form",           {html: 'What was too close to the desk? <p><input type="text" name="Answer"></p>'}],
    ["c3-dp", "DashedSentence", {s: "Lucy did not know the doors in the living room were so big."},
    		   "Form",           {html: 'What did Lucy not know were so big? <p><input type="text" name="Answer"></p>'}],
    //window//
    ["c4-ns", "DashedSentence", {s: "She saw window in the dining room and really liked it."},
    		   "Form",           {html: 'What was in the dining room? <p><input type="text" name="Answer"></p>'}],
    ["c4-np", "DashedSentence", {s: "Ben thinks that windows on the side of the house let in a lot of light."},
    		   "Form",           {html: 'What does Ben think lets in a lot of light? <p><input type="text" name="Answer"></p>'}],
    ["c4-i",  "DashedSentence", {s: "Many people think a window is a really nice addition to any room."},
    		   "Form",           {html: 'What do people think is a nice addition to any room? <p><input type="text" name="Answer"></p>'}],
    ["c4-ds", "DashedSentence", {s: "Look at the window on the front of that building"},
    		   "Form",           {html: 'What is on the front of the building? <p><input type="text" name="Answer"></p>'}],
    ["c4-dp", "DashedSentence", {s: "John said that he likes the windows that are very tall."},
    		   "Form",           {html: 'What did John say he likes? <p><input type="text" name="Answer"></p>'}],
    //book//
    ["c5-ns", "DashedSentence", {s: "I cannot believe there is book all over my desk."},
    		   "Form",           {html: 'What is all over my desk? <p><input type="text" name="Answer"></p>'}],
    ["c5-np", "DashedSentence", {s: "Did you buy books for your new classes yet?"},
    		   "Form",           {html: 'What do you need to buy for your new classes? <p><input type="text" name="Answer"></p>'}],
    ["c5-i",  "DashedSentence", {s: "I would like to have a book for my class but I'm not sure which one."},
    		   "Form",           {html: 'What do I want to have for my class? <p><input type="text" name="Answer"></p>'}],
    ["c5-ds", "DashedSentence", {s: "Robert found that the book you recommended was very interesting."},
    		   "Form",           {html: 'What did Robert find interesting? <p><input type="text" name="Answer"></p>'}],
    ["c5-dp", "DashedSentence", {s: "Why do the books for this class have so many chapters?"},
    		   "Form",           {html: 'What has so many chapters? <p><input type="text" name="Answer"></p>'}],
    //tree//
    ["c6-ns", "DashedSentence", {s: "Do you see tree over there in the park??"},
    		   "Form",           {html: 'What is in the park? <p><input type="text" name="Answer"></p>'}],
    ["c6-np", "DashedSentence", {s: "There are trees that have branches the size of cars."},
    		   "Form",           {html: 'What has branches the size of cars? <p><input type="text" name="Answer"></p>'}],
    ["c6-i",  "DashedSentence", {s: "There is a tree in the park that everyone carves their name into."},
    		   "Form",           {html: 'what does everyone carve their names into? <p><input type="text" name="Answer"></p>'}],
    ["c6-ds", "DashedSentence", {s: "Do you know where the tree is that we brought back from the farm?"},
    		   "Form",           {html: 'What did we bring back from the house <p><input type="text" name="Answer"></p>'}],
    ["c6-dp", "DashedSentence", {s: "I would like to plant the trees in the city park this Spring."},
    		   "Form",           {html: 'What would I like to plant in the city park? <p><input type="text" name="Answer"></p>'}],
  //Countable [-prototypical]//
    //noodle//
    ["cnp1-ns", "DashedSentence", {s: "I would like noodle for dinner with my vegetables."},
    		   "Form",           {html: 'What would I like with my vegetables? <p><input type="text" name="Answer"></p>'}],
    ["cnp1-np", "DashedSentence", {s: "He said that he does not often eat noodles for dinner with his family.."},
    		   "Form",           {html: 'What does he not eat often for dinner? <p><input type="text" name="Answer"></p>'}],
    ["cnp1-i",  "DashedSentence", {s: "It is hard to believe that there was a noodle on the table for so long."},
    		   "Form",           {html: 'What was on the table? <p><input type="text" name="Answer"></p>'}],
    ["cnp1-ds", "DashedSentence", {s: "Sam thought that the noodle was going to be tasty."},
    		   "Form",           {html: 'What did Sam think was going to be tasty? <p><input type="text" name="Answer"></p>'}],
    ["cnp1-dp", "DashedSentence", {s: "She said that the noodles were located in Aisle 4."},
    		   "Form",           {html: 'What was located in Aisle 4? <p><input type="text" name="Answer"></p>'}],
    //crayon//
    ["cnp2-ns", "DashedSentence", {s: "I know that crayon is used veyr often in art classes."},
    		   "Form",           {html: 'What is used often in art classes? <p><input type="text" name="Answer"></p>'}],
    ["cnp2-np", "DashedSentence", {s: "When I asked for crayons, he only gave me blue ones."},
    		   "Form",           {html: 'What did I ask for? <p><input type="text" name="Answer"></p>'}],
    ["cnp2-i",  "DashedSentence", {s: "I was wondering if a crayon was found on the table earlier."},
    		   "Form",           {html: 'What was on the table earlier? <p><input type="text" name="Answer"></p>'}],
    ["cnp2-ds", "DashedSentence", {s: "Jeffrey saw the crayon on the table this morning."},
    		   "Form",           {html: 'What did Jeffrey see on the table? <p><input type="text" name="Answer"></p>'}],
    ["cnp2-dp", "DashedSentence", {s: "I was wondering if you found the crayons that eh children took."},
    		   "Form",           {html: 'What did the children take? <p><input type="text" name="Answer"></p>'}],
    //stick//
    ["cnp3-ns", "DashedSentence", {s: "I would like it if someone would get stick out of the garden."},
    		   "Form",           {html: 'What should someone get out of the garden? <p><input type="text" name="Answer"></p>'}],
    ["cnp3-np", "DashedSentence", {s: "Do you think that we should get sticks together before we start the fire?"},
    		   "Form",           {html: 'What should we get before we start the fire? <p><input type="text" name="Answer"></p>'}],
    ["cnp3-i",  "DashedSentence", {s: "The pets like it if you throw a stick for them to fetch out of the grass."},
    		   "Form",           {html: 'What do the pets like you to throw? <p><input type="text" name="Answer"></p>'}],
    ["cnp3-ds", "DashedSentence", {s: "Skye said that she had seen a stick at the top of the stairs earlier."},
    		   "Form",           {html: 'What did Skye see at the top of the stairs? <p><input type="text" name="Answer"></p>'}],
    ["cnp3-dp", "DashedSentence", {s: "I cannot believe the sticks are still all over the grass."},
    		   "Form",           {html: 'What was all over the grass? <p><input type="text" name="Answer"></p>'}],
  //Flexible//
    //chocolate//
    ["f1-ns", "DashedSentence", {s: "Does you have chocolate for making the dessert?"},
    		   "Form",           {html: 'What do we need to make dessert? <p><input type="text" name="Answer"></p>'}],
    ["f1-np", "DashedSentence", {s: "They bought chocolates for everyone for the holidays."},
    		   "Form",           {html: 'What did they buy for everyone? <p><input type="text" name="Answer"></p>'}],
    ["f1-i",  "DashedSentence", {s: "There is a chocolate on the counter if you would like one."},
    		   "Form",           {html: 'What is on the counter? <p><input type="text" name="Answer"></p>'}],
    ["f1-ds", "DashedSentence", {s: "We need to get the chocolate in order to bake the cookies."},
    		   "Form",           {html: 'What do we need to get in order to bake cookies? <p><input type="text" name="Answer"></p>'}],
    ["f1-dp", "DashedSentence", {s: "The people at the door said the chocolates were for us."},
    		   "Form",           {html: 'What did the people say was for us? <p><input type="text" name="Answer"></p>'}],
    //cake//
    ["f2-ns", "DashedSentence", {s: "It was his birthday so he ordered cake for his special dessert."},
    		   "Form",           {html: 'What did he order for his special dessert? <p><input type="text" name="Answer"></p>'}],
    ["f2-np", "DashedSentence", {s: "Chelsea wants cakes for the gathering on Sunday."},
    		   "Form",           {html: 'What does Chelsea want? <p><input type="text" name="Answer"></p>'}],
    ["f2-i",  "DashedSentence", {s: "When should we order a cake for the party?"},
    		   "Form",           {html: 'What are we ordering for the party? <p><input type="text" name="Answer"></p>'}],
    ["f2-ds", "DashedSentence", {s: "They would like the cake made for Friday, not Saturday."},
    		   "Form",           {html: 'What did they make for Friday? <p><input type="text" name="Answer"></p>'}],
    ["f2-dp", "DashedSentence", {s: "I need you to get the cakes from the store tomorrow."},
    		   "Form",           {html: 'What do you need ot get from the store tomorrow? <p><input type="text" name="Answer"></p>'}],
    //stone//
    ["f3-ns", "DashedSentence", {s: "DO you need stone for the project you are working on with Thomas?"},
    		   "Form",           {html: 'What do you need for the project you are working on? <p><input type="text" name="Answer"></p>'}],
    ["f3-np", "DashedSentence", {s: "I do not think she stones will look nice in the garden."},
    		   "Form",           {html: 'What does not look nice in the garden? <p><input type="text" name="Answer"></p>'}],
    ["f3-i",  "DashedSentence", {s: "We told him that we have stone for him to use if he would like."},
    		   "Form",           {html: 'What do we for him to use? <p><input type="text" name="Answer"></p>'}],
    ["f3-ds", "DashedSentence", {s: "Jeff thinks the stone would be a nice addition to the path."},
    		   "Form",           {html: 'What does Jeff think would be a nice addition? <p><input type="text" name="Answer"></p>'}],
    ["f3-dp", "DashedSentence", {s: "How do you put the stones in the correct order?"},
    		   "Form",           {html: 'What needs to be put in the correct order? <p><input type="text" name="Answer"></p>'}],
    //rock//
    ["f4-ns", "DashedSentence", {s: "I think there is rock for your garden over there."},
    		   "Form",           {html: 'What is in the garden over there? <p><input type="text" name="Answer"></p>'}],
    ["f4-np", "DashedSentence", {s: "Have you seen rocks on this path before today?"},
    		   "Form",           {html: 'What is on this path? <p><input type="text" name="Answer"></p>'}],
    ["f4-i",  "DashedSentence", {s: "There was a rock in the middle of the road and the bus almost hit it."},
    		   "Form",           {html: 'What was in the middle of the road? <p><input type="text" name="Answer"></p>'}],
    ["f4-ds", "DashedSentence", {s: "I could not believe the rock had been stolen from the school."},
    		   "Form",           {html: 'What had been stolen from the school? <p><input type="text" name="Answer"></p>'}],
    ["f4-dp", "DashedSentence", {s: "He said that the rocks were stacked in the garden shed."},
    		   "Form",           {html: 'What was stacked in the garden shed? <p><input type="text" name="Answer"></p>'}],
    //string//
    ["f5-ns", "DashedSentence", {s: "There is string on this dress that needs to be removed."},
    		   "Form",           {html: 'What needs to be removed from this dress? <p><input type="text" name="Answer"></p>'}],
    ["f5-np", "DashedSentence", {s: "John said Tanner has strings to work on the project."},
    		   "Form",           {html: 'What does Tanner have for the project? <p><input type="text" name="Answer"></p>'}],
    ["f5-i",  "DashedSentence", {s: "Have you seen a string that was dropped on the floor earlier?"},
    		   "Form",           {html: 'What was dropped on the floor earlier? <p><input type="text" name="Answer"></p>'}],
    ["f5-ds", "DashedSentence", {s: "I said that I was looking for the string that fell off of the coat this morning."},
    		   "Form",           {html: 'What was I looking for? <p><input type="text" name="Answer"></p>'}],
    ["f5-dp", "DashedSentence", {s: "I should have him put the strings on the table in the other room."},
    		   "Form",           {html: 'What should be put on the table in the other room? <p><input type="text" name="Answer"></p>'}],
    //paper//
    ["f6-ns", "DashedSentence", {s: "Does he have paper for the novel that he is working on?"},
    		   "Form",           {html: 'What does he need for the novel that he is working on? <p><input type="text" name="Answer"></p>'}],
    ["f6-np", "DashedSentence", {s: "I saw papers that need to be recycled on the table in the living room."},
    		   "Form",           {html: 'What is on the table and needs to be recycled? <p><input type="text" name="Answer"></p>'}],
    ["f6-i",  "DashedSentence", {s: "He has a paper with important information on it."},
    		   "Form",           {html: 'What does he have? <p><input type="text" name="Answer"></p>'}],
    ["f6-ds", "DashedSentence", {s: "Do you know where the kids put the paper that was bought earlier?"},
    		   "Form",           {html: 'What did the kids put somewhere? <p><input type="text" name="Answer"></p>'}],
    ["f6-dp", "DashedSentence", {s: "Their father said that the papers had been put in their playroom."},
    		   "Form",           {html: 'What had been put in their playroom? <p><input type="text" name="Answer"></p>'}],
];