import babyImg from "../../assets/images/home/baby.jpeg";
import siblingImg from "../../assets/images/home/sibiling.jpeg";
import motherImg from "../../assets/images/home/mother.jpeg";
import spouseImg from "../../assets/images/home/spouse.jpeg";
import sexImg from "../../assets/images/home/sex.jpeg";
import healthImg from "../../assets/images/home/health.jpeg";

const data = {
  home: [
    { name: "Baby", img: babyImg },
    { name: "Sibling", img: siblingImg },
    { name: "Mother", img: motherImg },
    { name: "Spouse", img: spouseImg },
    { name: "Sex", img: sexImg },
    { name: "Health", img: healthImg },
  ],
  baby: [
    {
      question: "Why Do Babies Vomit?",
      ans:
        "The most common reason why babies vomit in the early weeks after birth is that is some of the milk is being brought up with some air when baby burps. The other reason why babies vomit often is that the muscle valve at the top of their stomach that opens into the stomach is weak and immature. In adults, this valve closes tightly after swallowing food, to keep food down. It requires much force to push this valve open to allow an adult to vomit. The lid does not close tightly enough in babies. So, a little force can make the valve open, and milk will come out. Baby may also vomit if the baby's stomach is 'overfull,' or is gently pressed on. For example, if you rest the baby too far over your shoulder, or if you bend over your baby with the baby on your laps. Vomiting will improve as the baby grow older from about 6 months to 1 year. It will also improve when the baby starts to sit down and to spend more time sitting.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby1.jpg")],
      vid: null,
    },
    {
      question: "How To Reduce The Fever Of A Baby",
      ans: null,
      ansOpt: [
        "Use the medicine",
        "Take the baby to the clinic and use the drug that you are given. Use the drug the way that you are told. Make sure that you complete the dose.",
        "Give the baby a luke-warm bath. The water from the bathing will evaporate from the baby's skin and cool her down. Do not use cold water, because it will make the baby shiver and her temperature will rise.",
        "Give extra fluids for the baby to drink. When you give the baby extra fluid, you are cooling it down from the inside.",
      ],
      img: [require("../../assets/images/baby/Baby2.jpg")],
      vid: ["https://www.youtube.com/watch?v=HsRBsNp_cNw"],
    },
    {
      question: "Why Do Babies Have Stomach Pain?",
      ans:
        "Stomach aches are caused by eating too much or too little food, gas in the intestine, or a mild infection. If a child has stomach aches often take him to see a doctor. Frequent stomach aches may be because of constipation, colic, or urinary tract infection.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby3.jpg")],
      vid: null,
    },
    {
      question: "Why Do Babies Get A Fever When Teething?",
      ans:
        "It is common for teething to make babies have a fever and uncomfortable. However, if the temperature is above 101 degrees is likely to be due to an infection rather than teething. If the fever is high take the baby to the doctor.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby4.jpg")],
      vid: null,
    },
    {
      question: "Why Is The Baby Sleeping More Than Usual?",
      ans:
        "Babies sleep more than usual due to an increase in the rate that the baby is growing. The baby may start sleeping for longer in the morning and afternoon. Babies grow during sleep.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby5.jpg")],
      vid: null,
    },
    {
      question: "What Are The Weaning Foods Needed For Babies?",
      ans:
        "Do not force the child to take the new food. The baby is used to breastmilk, so if the child takes 1 or 2 spoons of the food at each attempt, it is ok. The baby will increase the quantity he takes gradually. Try to be patient and be playful when introducing the food. It will make the baby have an interest in the food.  Keep in mind that you should give only one food at a time. Give the same food for at least 3-4 days before you give another one. Also, do not add many ingredients at once. For example, give only pap first for 3-4 days. Then add milk and give for 3-4 days. Continue to give breastmilk till the baby is at least 1 year old.",
      ansOpt: [
        "Pap- pap made from grounded fermented Maize, guinea corn, and soya beans is very simple and easy to make. You can give it with a spoon or make it watery to serve with feeding bottle. This is often the first weaning food that most mothers give their babies.",
        "Vegetables and tubers: Well-mashed cooked vegetables are good. You can use the common vegetables and tubers you prepare for the family, like yam, sweet potato, Irish potato, carrots, cassava, and examples of vegetables are dark green leafy plants, tomatoes, etc.",
        "Fruit: Mashed banana is very good. Remove the seed from orange and juice it for the baby. Peel the back of apples, remove the seeds and mash it. Make juice from or mash mango, pawpaw and give to the baby.",
        "Beans – peel the back of beans and cook it with little salt and pepper till it is soft. Give to the baby. Give Moimoi and Akara.",
        "Grains and Cereals: Rice is one of the most popular weaning foods. Just make sure it is soft. You can leave other grains like oats or corn until a few months later (wheat, millet, sorghum).",
        "Swallows: Amala with Ewedu is a common weaning food for babies in western Nigeria. Add ground crayfish or boiled fish to the soup. It will make the soup a nutritious meal for the baby. As the baby grows older, you give other swallows like Eba, Semovita, Pounded Yam because the baby can digest them. However, ensure that the food is soft enough for your child to eat.",
        "Animal product:  Give animal products such as milk, eggs, cheese, yogurt, fish, chicken, meat.",
      ],
      img: [
        require("../../assets/images/baby/Baby6a.jpg"),
        require("../../assets/images/baby/Baby6b.jpg"),
        require("../../assets/images/baby/Baby6c.jpg"),
        require("../../assets/images/baby/Baby6d.jpg"),
        require("../../assets/images/baby/Baby6e.jpg"),
        require("../../assets/images/baby/Baby6g.jpg"),
      ],
      vid: null,
    },
    {
      question: "Can I Give My Baby Water At 2 Months?",
      ans:
        "Baby shouldn't drink water until he is 6 months old. This is called exclusive breastfeeding. It will make sure that your baby gets the best nutrition from breastmilk. Breastmilk contains enough water for the baby. So, give breastmilk even when the baby has a hiccup. Once your baby is 6 months old, it's okay to give him sips of water when he's thirsty. This is because the baby will start to take other food that is harder than breastmilk and contains oil, pepper, meat, etc. which will need water to help the digestion.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby7.jpg")],
      vid: null,
    },
    {
      question: "What Causes Baby Stooling During The Teething Period?",
      ans:
        "Teething does not cause stooling. Stooling happens because babies often put their hands and other things into their mouth. They put things into their mouth because the gum is itching them. The hands and the things they put into their mouth may have touched germs. The germs make them stool.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby8.jpg")],
      vid: null,
    },
    {
      question: "What Causes Choking In Babies?",
      ans:
        "Choking is a common cause of injury and death in young children. It is because their small airways are easily blocked. It takes time for babies to know how to chew and swallow food properly. Babies may not be able to cough forcefully enough to clear their airway obstruction.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby9.jpg")],
      vid: null,
    },
    {
      question: "Can I Give My Baby Water At 2 Months?",
      ans: "Many things can cause birth defects. They include",
      ansOpt: [
        "Lack of nutritious food during pregnancy",
        "Lack of iodine in a pregnant woman's food.",
        "Lack of folic acid in the body of woman before she gets pregnant",
        "Hereditary issues- the baby may inherit some things from the family that makes it form badly.",
        "Environmental factors- the mother may be having contact with chemical, tobacco, drugs and alcohol, diseases such as German measles. These things affect a baby in the womb and may make the baby form badly.",
        "Age of the woman is above 35 years",
        "Taking many different medicines during pregnancy",
        "Difficulties during delivery",
      ],
      img: [require("../../assets/images/baby/Baby10.jpg")],
      vid: null,
    },
    {
      question: "What Is The Cause Of Jaundice In Newborn Babies?",
      ans:
        "Jaundice is when the skin of the body and the white part of the eyes turns yellow. Jaundice is not a disease but is a sign of a disease. Jaundice in babies is caused by an increase in the destruction of red blood cells in the body, and the liver is not able to remove the waste product. It is common in premature babes and when the baby is newly born.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby11.jpg")],
      vid: null,
    },
    {
      question: "How To Care For The Cord",
      ans:
        "Make sure that you use methylated spirit and cotton wool to clean the baby' cord several times a day. You may decide that you will clean the cord every time you change the diaper daily. Pay attention to the base of the cord that is the part nearest to the belly button. Always allow air to reach the cord often so that it can dry up and heal on time. Prevent diapers from rubbing against the cord. You can fold the diaper so that it does not cover the cord. Allow the cord stump to fall off on its own. Do not pull it. Do not apply kerosene, dusting powder in other to force the cord to fall off early. There is nothing to worry if the cord does not fall before 7 days as long as the cord is cleaned regularly, kept dry and air touches it. Note that when the cord is still on the baby do not dip the baby in a bath while bathing so that the cord will not get wet.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby12.jpg")],
      vid: [
        "https://www.nhs.uk/video/Pages/how-do-i-take-care-of-the-umbilical-cord-stump.aspx?searchtype=&searchterm=&offset=17&",
      ],
    },
    {
      question: "How Does Food Reach Baby In The Womb?",
      ans:
        "Food reaches the developing baby through the umbilical cord from the placenta. After the mother's food is digested, the food will be absorbed into the blood and go from mother to child through the placenta. The placenta filters away harmful things, such as germs to protect the fetus.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby13.jpg")],
      vid: null,
    },
    {
      question: "How To Take Good Care For Your Baby",
      ans:
        "Make sure you and the baby are hygienic. Hold your baby right. Don't shake your baby strongly. Don't play rough play with your child. Let your skin touch the skin of your baby. Talk to your baby often. Always check the diapers and change on time if it is wet or if the baby poops. Feed the baby anytime the baby wants food. Breastfeed the baby for 6 months without giving water and introduce nutritious foods after 6 months. Sterilize feeding bottles and breast pumps regularly when you feed the baby with other foods. Take proper care of the umbilical cord by cleaning with methylated spirit and cotton wool and keep the cord dry. Bath your baby and keep him dry. Put your baby to sleep on the baby bed. Remove toys away from the baby bed. Clean your room and baby's room often. Dress your baby right that means look at the weather and wear the cloths that are good for the weather for your baby. Always comfort your baby when he is crying. Never leave your baby alone. Go to the doctor on time when the baby is sick. Immunize your child at the health center.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby14.jpg")],
      vid: null,
    },
    {
      question: "Baby Teething",
      ans:
        "Baby teething is when a baby is growing teeth, it is a normal part of a baby's growth. Teething can cause pain, high body temperature, and discomfort, which can be stressful for the baby and the parents. Stooling is not a sign of baby teething, but it is a sign of infection in the baby's stomach. Ways to soothe pain caused by teething;",
      ansOpt: [
        "Rub your baby's mouth with a clean finger; rub a finger over your baby's gums. Applying little pressure on the gum can relieve some of the pain.",
        "Keep your baby's mouth cool. Keeping it cool can relieve some of the pain of teething. You can use a cold spoon, or a slightly cool teething ring to help your baby feel better.",
        "Use teething toys. Teething toys are usually soft plastic toys which babies can bite with their gums when the gum is itching them.",
        "Use only common pain reliever. Do not use medicine that the doctor did not tell you.",
      ],
      img: [require("../../assets/images/baby/Baby15.jpg")],
      vid: [
        "https://www.youtube.com/watch?v=PaTji1kwFDU",
        "https://www.parents.com/baby/health/baby-teeth/baby-teething-timeline",
      ],
    },
    {
      question: "What Makes Baby Get Cold?",
      ans:
        "Symptoms of the common cold in babies are sneezing, runny nose and difficulty in breathing. Sometimes there can be a sore throat, cough, and high temperature. Naturally babies are prone to cold and cough because of their low immunity. When babies are exposed to older children every day, it makes them likely to get cold. Also, exposing the baby's head and feet can make them get cold quickly. To prevent cold in babies make sure that you dress them up appropriately depending on the weather.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby16.jpg")],
      vid: null,
    },
    {
      question: "What Makes Baby Get Cold?",
      ans:
        "There is no cure for the common cold in babies but you can help the baby to get better. You can give pain relief that is for the age of the baby in the correct dosage if prescribed by your doctor. Do not give aspirin to babies and children. You can do the following; Give plenty of fluid that is breast milk for an infant less than 6 months. If the baby is older increase the volume of diluted fruit juice that contains vitamin C that you give.",
      ansOpt: [
        "Always keep the baby's room warm.",
        "Keep the baby away from the smoke.",
        "Suck out the mucus in baby's nose.",
        "Make the baby sleeps well at night.",
        "If the baby cannot sleep well at night, put him on a semi-sitting position on your body so that he can breathe well.",
      ],
      img: [require("../../assets/images/baby/Baby17.jpg")],
      vid: null,
    },
    {
      question: "When Should I Call The Doctor on My Baby's Health?",
      ans:
        "If the baby is younger than 3 months, and he has a cold. This is because it may be a sign of something more serious. Call the doctor or take the baby to the doctor if:",
      ansOpt: [
        "The baby has a very serious cough.",
        "The baby is hot.",
        "The symptoms continue for more than 10 days.",
        "The baby has an earache. You can know this if the baby keeps pulling his ear and he is not comfortable.",
        "The baby stops to take food or breast milk.",
        "The baby's breathing is difficult.",
        "The mucus that is coming out is thick and green.",
        "The baby looks tired.",
      ],
      img: [require("../../assets/images/baby/Baby18.jpg")],
      vid: null,
    },
    {
      question: "Immunization/Vaccination",
      ans:
        "Vaccination is given to reduce the occurrence of infectious disease. Vaccination is much better and cheaper than taking medications for a disease. Many people spread myths on vaccination, and it prevents some parents from vaccinating their children. This has led to the occurrence of measles, polio and other vaccine preventable diseases. Ensure that you take your children for all the routine immunization after delivery. Immunization makes your child healthy, it saves money spent on medications and reduces worries from sickness.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby19.jpg")],
      vid: null,
    },
    {
      question: "Importance Of Breastfeeding Of Babies",
      ans:
        "Vaccination is given to reduce the occurrence of infectious disease. Vaccination is much better and cheaper than taking medications for a disease. Many people spread myths on vaccination, and it prevents some parents from vaccinating their children. This has led to the occurrence of measles, polio and other vaccine preventable diseases. Ensure that you take your children for all the routine immunization after delivery. Immunization makes your child healthy, it saves money spent on medications and reduces worries from sickness.",
      ansOpt: [
        "Breastfeeding has many benefits for the baby. The benefits of breastfeeding include;",
        "Breastmilk helps your baby grow healthy and strong",
        "Breastmilk is the best nutrition for your baby",
        "Breastmilk changes to meet your growing baby's need",
        "Breastfed babies often have to visit the hospital less.",
        "Breastfeeding makes you and your baby closer.",
        "Breastfed babies have less colic, constipation, and diarrhea.",
        "Breastmilk is gentle to your baby's stomach and easy to digest.",
        "Breastmilk is just what your baby needs in the right amount.",
        "Breastmilk is clean and prevents infections from bottle feeding",
        "Breastmilk has a perfect mix of vitamin, protein, and fat - everything the baby needs to grow.",
        "Breastfed infants are more likely to gain the right amount of weight as they grow faster than become overweight children.",
        "Breastfeeding lowers your baby's risk of having asthma or allergies.",
        "Breastfeeding also lowers the risk of diabetes, obesity and some cancer too.",
      ],
      img: [require("../../assets/images/baby/Baby20.jpg")],
      vid: null,
    },
  ],
  sibling: [
    {
      question: "Common Baby Skin Problems: Symptoms & Causes",
      ans:
        "Skin problems in a baby can be caused by germs, allergies, heat, and wet nappy. Most skin conditions do not last long.  Common skin conditions in babies include;",
      ansOpt: [
        "Heat rash- heat rash is also called prickly heat. Heat rash is caused by sweat that does not evaporate but remains under the skin. It looks likes small, pointed bumps and sometimes red. It often appears on the buttocks and the back. It is common in countries that are hot and humid.  Heat rash is caused by excessive sweat in hot weather, high fever, dressing the baby in cloths that are too warm or thick., wearing clothes that do not allow evaporation to take place and using heavy cream and ointments that blocks sweat pores.",
        "The nappy rash-Nappy rash is common among babies, and it occurs more at age 9-12 months. The nappy rash looks red around the areas of the skin that are covered by diapers or nappy. Long contact with urine and stools causes it, the rubbing of fabric or sticky tapes, long use of diaper that is wet and infection from germs.",
        "Cradle cap- are pink or red patches on the scalp. Sometimes it affects the armpit and the neck and it any be covered with white flakes or yellow scales. It is caused by bacterial infection and abnormal production of oil in the oil glands and hair follicles.",
        "Eczema- are patches of red, itchy, rough and dry skin. It is found often on the check and legs of babies and children, sometimes adults have it. The real cause of Eczema is unknown some factors contribute to it. They are high temperature, viral infection, house dust mites, allergic reaction to detergents, soaps and creams.",
      ],
      img: [require("../../assets/images/sibling/Sibling1a.jpg"), require("../../assets/images/sibling/Sibling1b.jpg"), require("../../assets/images/sibling/Sibling1c.jpg"), require("../../assets/images/sibling/Sibling1d.jpg")],
      vid: null,
    },
    {
      question: "Prevention And Treatment of Baby Skin Conditions",
      ans:
        "Dress your child in light clothing depending on the weather, avoid using thick nappy especially in hot weather.  Do not use strong soap especially antiseptic baby soaps for the baby and do not use dyes for the baby clothing. Reduce the time used for bathing to about 5 -10 minutes. Use light cream to rub the skin of the baby.",
      ansOpt: [
        "Treatment for heat rash- Avoid thick nappy. Keep the room cool. Dress the baby in light clothes. Avoid thick body creams. Use cool water to bath the baby. Use heat rash treatment creams to clear it.",
        "Treatment for nappy rash- change baby diaper on time. use water to wash the buttocks after changing nappy and use Vaseline to rub the buttocks. Use prescribed creams for treatment of serious cases.",
        "Treatment for cradle cap- Put olive oil on the baby's head one hour before you bath the baby. It will help to make the scales soft before bathing. Use medicated shampoo to wash baby's head. Use prescribed treatment cream on the head for serious cases.",
        "Treatment for eczema- bathe the baby with slightly warm water and mild soap. Do not rub the skin of the baby when drying it, pat it dry. Use body cream daily to prevent and control the spread of eczema. Use prescribed treatment cream.",
      ],
      img: [require("../../assets/images/sibling/Sibling2.jpg")],
      vid: null,
    },
    {
      question: "Causes Of Fever And High Temperature In Children",
      ans:
        "The normal range of temperature for children is 36.5°C-38°C. A fever is when the child's body temperature is higher than 38°C. A fever is a sign of sickness not an illness in itself. Fever is a natural response of the body to fight disease. Many things can make children to get fevers, and the fever may last for only a few days.But sometimes a fever may be longer, and it might be the symptom of a serious disease.The most common cause of fever in children is an infection.",
      ansOpt: null,
      img: [require("../../assets/images/sibling/Sibling3.jpg")],
      vid: null,
    },
    {
      question: "Symptoms Of Fever",
      ans:
        "Every day the body temperature goes up and down. It is usually lowest early in the morning and highest in the late afternoon and early evening. A fever might come slowly and rise over a few days, or it might rise very quickly.",
      ansOpt: null,
      img: [require("../../assets/images/sibling/Sibling4.jpg")],
      vid: null,
    },
    {
      question: "Causes Of Fever",
      ans: null,
      ansOpt: [
        "Virus- Viruses cause infections such as cold, upper respiratory tract infections and chickenpox.",
        "Bacteria- Bacteria cause infections as some ear and throat infections, meningitis, urinary tract infections, pneumonia, sore throat, and blood infections.",
        "Allergic Reactions- It may be due to reaction to drugs, vaccines, pollens, and other air pollutants.",
      ],
      img: [require("../../assets/images/sibling/Sibling5a.jpg"), require("../../assets/images/sibling/Sibling5b.jpg")],
      vid: null,
    },
    {
      question: "When To See Your Doctor About Fever And High Temperature In Children",
      ans: null,
      ansOpt: [
        "If the baby is less than three months old and it has a fever. Visit the doctor immediately because it is difficult to know if a serious illness is causing the fever.",
        "If the child is between 3–12 months and it has a fever. Go to the doctor immediately you notice the fever because there may be a serious illness causing the fever.",
        "If the child is older than 12 months go to the doctor if you notice fever and the following signs see:",
        "Difficulty in breathing",
        "Drowsiness",
        "Continuous vomiting or stooling",
        "A continuous headache, the neck is stiff, and light is hurting the baby's eyes.",
        "Looking sicker than before – more pale, weak and restless",
        "Refuses to drink and is not urinating as often as before.",
        "Has pains",
        "Does not improve after 48 hours",
        "If you are worried about any other reason",
      ],
      img: [require("../../assets/images/sibling/Sibling6.jpg")],
      vid: null,
    },
    {
      question: "How to Treat Fever",
      ans: "It important that you give the baby plenty of fluid to avoid dehydration. If the baby is not taking enough fluid talk to your doctor. Do the following things to help baby overcome the fever",
      ansOpt: [
        "Dress the child in light cloths.",
        "Avoid fans.",
        "Breastfeed the baby more.",
        "If the baby is taking baby food, give the normal portion in small bits.",
        "If the baby is older than 6 months, continue breastfeeding or giving other food. Give the baby water to drink.",
        "Give baby paracetamol and any other drugs according to the doctor's prescription. Do not give overdose because overdose can cause liver damage.",
      ],
      img: [require("../../assets/images/sibling/Sibling7.jpg")],
      vid: "https://www.youtube.com/watch?v=HsRBsNp_cNw",
    },
  ],
  mother: [
    {
      question: "How To Make Your Belly Flat After Child Delivery",
      ans: null,
      ansOpt: [
        "Press your belly with hot water to allow the steam to get to your private part.",
        "Tie your belly with a cloth after pressing it with hot water or sitting on a hot water.",
        "Drink hot pepper soup",
        "Take warm water and avoid taking cold or ordinary water.",
        "you could sit on hot water if you did Cesarean Section (CS).",
        "Keep doing all the things said above for more than 3 months after delivery.",
      ],
      note: "NB: Don't stop when the stomach is at the size you want. Because if you stop there, the tummy will become bigger later. So, press beyond where you want to stop it. The reason is that the belly will still increase in size after you stop. So, it will come back to the point that you want it to be.",
      img: [require("../../assets/images/mother/Mother1.jpg")],
      vid: null,
    },
    {
      question: "Care Of The Breast During Pregnancy",
      ans: "Special care of your breasts is very important throughout your pregnancy. Here are some breast care tips during pregnancy: Hygiene Practices For The Breast There are some hygienic practices you do during your pregnancy:",
      ansOpt: [
        "Wash your nipples. The body fluid passes through the breast from the fifth month of pregnancy. It looks like a hard layer, and the surrounding skin looks red. You can avoid this by making your nipples clean. To make the nipples clean, rub them with a clean piece of cloth.",
        "Do not to use soap to clean nipples because it can cause dryness and make the nipple crack. Sesame oil or petroleum jelly is good to keep the nipples soft.",
        "To make your nipple large for easy breastfeeding always pull your nipples with the forefinger and thumb when you are bathing. Take care not to scratch the nipples with your nails. This exercise will help milk flow after delivery.",
        "Massage your breasts by rubbing them in circles when bathing with oil and water. Breast massage helps proper blood flow.",
        "Always wear a bra to support the weight of your breasts. Make sure that you do not put much pressure on the breast by wearing a very tight bra. Do not use a bra that has underwires in it because they disturb the production of milk.",
        "Use maternity bra for breastfeeding. Maternity bras will make breastfeeding easier and it gives support to the breast.",
      ],
      img: [require("../../assets/images/mother/Mother2.jpg")],
      vid: null,
    },
    {
      question: "How Does Pregnancy Occur?",
      ans: "Every woman has eggs in her in two places in her body above the womb. One egg is released every month so that if a man's sperm meets it, the egg and the sperm can become a baby.  When a woman menstruates, it takes about 28 days before the next menstruation. The first day of the menses is the first day of the menstrual cycle. On the 14th day after the first of day menstruation, an egg comes out to the womb. The egg remains alive for 2 days in the womb waiting for sperm to join with it and make it fertilized so that it can grow into a baby. When the egg is fertilized, it attaches itself to the wall of the womb, and it starts to grow into a baby.The baby grows in the womb for about 9 months, and it is delivered.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother3.jpg")],
      vid: ["https://www.youtube.com/watch?v=vFfqLs94iHc", "https://www.youtube.com/watch?v=DGyRD9HnXVs"],
    },
    {
      question: "Why Does A Pregnant Woman Vomit?",
      ans: "The main cause of vomiting during pregnancy is not known. But is likely to be due to changes in the body hormones.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother4.jpg")],
      vid: null,
    },
    {
      question: "What Are The Foods To Avoid While Pregnant?",
      ans: "The main cause of vomiting during pregnancy is not known. But is likely to be due to changes in the body hormones.",
      ansOpt: [
        "Do not eat uncooked meat and fish or they are not well cooked- Uncooked meat and fish that are not well cooked contains germs that are dangerous to a pregnant woman and her baby.",
        "Do not eat uncooked eggs- Uncooked eggs may contain germs which are harmful to a pregnant woman. Do not eat any food made with uncooked eggs. Eggs must be properly cooked before you eat it.",
        "Do not eat un-boiled raw milk- Don't drink un-boiled raw milk, or cheeses made from un-boiled raw milk. It means that do not drink milk that is collected fresh from an animal. You must boil the milk before you drink it.",
        "Wash all fruits and vegetables- Wash fruits and vegetables very well and remove all the soil from it before you eat or cook them.",
        "Do not drink alcohol- Alcohol may damage the baby and affect the baby's growth in the womb. Alcohol can affect your baby's development.",
        "Reduce caffeine- When caffeine is taken a lot during pregnancy, it reduces the weight of the baby at birth. Too much caffeine can also cause miscarriage. Some soft drink contains caffeine. An example is Cola drinks. So, reduce the bottles of Cola drink that you take during pregnancy.",
      ],
      img: [require("../../assets/images/mother/Mother5.jpg")],
      vid: null,
    },
    {
      question: "Can a pregnant woman still have a regular period?",
      ans: "Yes, you can still get regular blood flow when you are pregnant. Some women have vaginal bleeding during pregnancy. Some even have regular bleeding that looks like a regular period. But vaginal bleeding during pregnancy is not the same thing as menses. Monthly bleeding while pregnant may be because of change in the cervix which makes it softer, multiple pregnancies such as twins and infection.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother6.jpg")],
      vid: null,
    },
    {
      question: "Causes of Malaria In Pregnancy",
      ans: "Malaria is common in areas where there is a high amount of rainfall and temperature such as Africa. The environment is good for the mosquito to grow.  The following factors can cause malaria during pregnancy;",
      ansOpt: [
        "Loss of immunity: Pregnancy makes a woman's resistance to disease to reduce. This makes the pregnant woman likely to contract malaria.",
        "Areas where there is Malaria: Women in an area where malaria is common often have immunity against malaria. So, they are not likely to get malaria. But in areas where malaria is not common, women have lower resistance to malaria, so they have a high tendency to get malaria infection.",
        "HIV infection: Women infected with HIV have a high risk of contracting malaria because there is immunity low.",
      ],
      img: [require("../../assets/images/mother/Mother7.jpg")],
      vid: ["https://www.youtube.com/watch?v=UcIyJbEM_ko"],
    },
  ]


};

export default data;
