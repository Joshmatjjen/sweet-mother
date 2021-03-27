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
      img: [
        require("../../assets/images/sibling/Sibling1a.jpg"),
        require("../../assets/images/sibling/Sibling1b.jpg"),
        require("../../assets/images/sibling/Sibling1c.jpg"),
        require("../../assets/images/sibling/Sibling1d.jpg"),
      ],
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
      img: [
        require("../../assets/images/sibling/Sibling5a.jpg"),
        require("../../assets/images/sibling/Sibling5b.jpg"),
      ],
      vid: null,
    },
    {
      question:
        "When To See Your Doctor About Fever And High Temperature In Children",
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
      ans:
        "It important that you give the baby plenty of fluid to avoid dehydration. If the baby is not taking enough fluid talk to your doctor. Do the following things to help baby overcome the fever",
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
      note:
        "NB: Don't stop when the stomach is at the size you want. Because if you stop there, the tummy will become bigger later. So, press beyond where you want to stop it. The reason is that the belly will still increase in size after you stop. So, it will come back to the point that you want it to be.",
      img: [require("../../assets/images/mother/Mother1.jpg")],
      vid: null,
    },
    {
      question: "Care Of The Breast During Pregnancy",
      ans:
        "Special care of your breasts is very important throughout your pregnancy. Here are some breast care tips during pregnancy: Hygiene Practices For The Breast There are some hygienic practices you do during your pregnancy:",
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
      ans:
        "Every woman has eggs in her in two places in her body above the womb. One egg is released every month so that if a man's sperm meets it, the egg and the sperm can become a baby.  When a woman menstruates, it takes about 28 days before the next menstruation. The first day of the menses is the first day of the menstrual cycle. On the 14th day after the first of day menstruation, an egg comes out to the womb. The egg remains alive for 2 days in the womb waiting for sperm to join with it and make it fertilized so that it can grow into a baby. When the egg is fertilized, it attaches itself to the wall of the womb, and it starts to grow into a baby.The baby grows in the womb for about 9 months, and it is delivered.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother3.jpg")],
      vid: [
        "https://www.youtube.com/watch?v=vFfqLs94iHc",
        "https://www.youtube.com/watch?v=DGyRD9HnXVs",
      ],
    },
    {
      question: "Why Does A Pregnant Woman Vomit?",
      ans:
        "The main cause of vomiting during pregnancy is not known. But is likely to be due to changes in the body hormones.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother4.jpg")],
      vid: null,
    },
    {
      question: "What Are The Foods To Avoid While Pregnant?",
      ans:
        "The main cause of vomiting during pregnancy is not known. But is likely to be due to changes in the body hormones.",
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
      ans:
        "Yes, you can still get regular blood flow when you are pregnant. Some women have vaginal bleeding during pregnancy. Some even have regular bleeding that looks like a regular period. But vaginal bleeding during pregnancy is not the same thing as menses. Monthly bleeding while pregnant may be because of change in the cervix which makes it softer, multiple pregnancies such as twins and infection.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother6.jpg")],
      vid: null,
    },
    {
      question: "Causes of Malaria In Pregnancy",
      ans:
        "Malaria is common in areas where there is a high amount of rainfall and temperature such as Africa. The environment is good for the mosquito to grow.  The following factors can cause malaria during pregnancy;",
      ansOpt: [
        "Loss of immunity: Pregnancy makes a woman's resistance to disease to reduce. This makes the pregnant woman likely to contract malaria.",
        "Areas where there is Malaria: Women in an area where malaria is common often have immunity against malaria. So, they are not likely to get malaria. But in areas where malaria is not common, women have lower resistance to malaria, so they have a high tendency to get malaria infection.",
        "HIV infection: Women infected with HIV have a high risk of contracting malaria because there is immunity low.",
      ],
      img: [require("../../assets/images/mother/Mother7.jpg")],
      vid: ["https://www.youtube.com/watch?v=UcIyJbEM_ko"],
    },
    {
      question: "Signs And Symptoms Of Malaria In Pregnancy",
      ans:
        "In its early stage, the symptoms of malaria look like other infections similar to those of influenza or viral infection. Only a blood test can help determine the exact infection. The common symptoms of malaria in pregnancy are:",
      ansOpt: [
        "High fever and sweating or feeling cold",
        "Nausea",
        "A cough",
        "A headache",
        "Vomiting",
        "Muscle pain",
        "Diarrhea",
        "Jaundice",
        "Breathing problem",
        "Enlargement of the Spleen",
        "Pale skin appearance",
        "General illness",
      ],
      note:
        "It is important to recognize and treat pregnancy malaria early because it can cause other health problems both for the mother and the baby.",
      img: [require("../../assets/images/mother/Mother8.jpg")],
      vid: ["https://www.youtube.com/watch?v=UcIyJbEM_ko"],
    },
    {
      question: "Complications Of Malaria In Pregnancy",
      ans:
        "Malaria can be a common or severe infection. The common malaria infection has symptoms such as headache, fever, shivering, and sweating that occur every two to three days and last for six to ten hours. Severe malaria is very dangerous to live.It can cause anaemia, a serious breathing problem, cerebral malaria, and organ damages.Here are some of the complications in pregnant women: Anaemia during pregnancy is caused by the malaria germ that destroys the blood cell.Anaemia may cause bleeding after delivery leading to the death of mother and baby.Severe malaria can lead to leaking of water into the lungs.It also causes the weakness in the ability of the body to fight diseases.Severe malaria during pregnancy can lead to a low blood sugar level in the woman.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother9.jpg")],
      vid: null,
    },
    {
      question: "Why Does a Woman Have Breastmilk during pregnancy?",
      ans:
        "Many mothers' breast begins to leak colostrum (sometimes called Pre-milk) while they are pregnant often in the third trimester. Other expectant moms do not. It is normal either to have milk coming out or not. You can wear nursing pads in your bra to protect your clothes if milk is coming out. Colostrum is a thick, yellowish fluid that contains antibodies that help protect new babies from infections.If you choose to breastfeed, this precious liquid will nourish your baby until your milk comes in.Colostrum has more protein, but less carbohydrate and fat than mature breast milk.It's easy to digest and has just the right amount of nutrients a baby needs in the first few days after birth.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother10.jpg")],
      vid: null,
    },
    {
      question: "What Causes Insomnia During Pregnancy?",
      ans: null,
      ansOpt: [
        "Discomfort due to the increased size of your stomach",
        "Back pain",
        "Hear burn",
        "Frequent urination during the night",
        "Anxiety",
        "Anticipating the arrival of your baby",
        "Frequent and clear dream",
        "Hormonal changes",
      ],
      img: [require("../../assets/images/mother/Mother11.jpg")],
      vid: null,
    },
    {
      question: "How Can I Cope With Or Treat My Insomnia During Pregnancy?",
      ans: null,
      ansOpt: [
        "Try new sleeping positions.",
        "Prepare yourself for sleep by taking a warm bath or a gentle massage.",
        "Set up your room for a comfortable sleep setting. Try changing your thermostat to a comfortable temperature and playing some relaxing or natural sounds that can help make you sleepy.",
        "Try relaxation techniques, such as the ones you may have learned in a pregnancy clinic.",
        "If you still cannot fall asleep, you may consider getting up. You can try reading a book, eating a small snack, or drinking some warm milk.",
        "Exercise regularly during the day.",
        "If you have the opportunity to sleep during the day, you should take it. However, long naps may interfere with your sleeping schedule at night.",
      ],
      img: [require("../../assets/images/mother/Mother12.jpg")],
      vid: null,
    },
    {
      question: "What Causes High Blood Pressure During Pregnancy?",
      ans:
        "An unhealthy way of life may lead to high blood pressure during pregnancy.  Unhealthy ways of life that can cause high blood pressure during pregnancy include; being overweight, being inactive, smoking, and drinking alcohol. A woman who is pregnant for the first time is more likely to have high blood pressure. Women who are pregnant with many babies are more likely to develop hypertension because their body is under more stress. When a family has a history of hypertension during pregnancy, the woman is likely to have hypertension during pregnancy too. Age of the woman is also a factor, pregnant women over the age of 40 are more at risk. Women who had high blood pressure before pregnancy are at higher risk for related complications during pregnancy than those with normal blood pressure.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother13.jpg")],
      vid: null,
    },
    {
      question: "What Is The Normal Blood Pressure During Pregnancy?",
      ans:
        "To determine what your 'normal' blood pressure is during pregnancy, your doctor will likely take an initial blood pressure measurement at your first visit. Then they will measure your blood pressure at every visit that follows. Normal blood pressure without pregnancy is usually somewhere close to 120/80 mm Hg. A blood pressure that is greater than 140/90 mm Hg, or that is 15 degrees higher on the top number from where you started before pregnancy, may be cause for concern. Early in pregnancy, usually from 5 weeks' pregnant to the middle of the second trimester, a pregnant woman's blood pressure may decrease. This is because pregnancy hormones can stimulate blood vessels to widen. As a result, the resistance to blood flow isn't as high.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother14.jpg")],
      vid: null,
    },
    {
      question: "What Is Low Blood Pressure During Pregnancy?",
      ans:
        "While there isn't a definitive number that is too low, there are symptoms that are associated with low blood pressure:",
      ansOpt: [
        "Headache",
        "Dizziness",
        "Nausea",
        "Feeling faint",
        "Cold, damp skin",
      ],
      img: [require("../../assets/images/mother/Mother15and16.jpg")],
      vid: null,
    },
    {
      question: "How to Monitor Your Blood Pressure During Pregnancy?",
      ans:
        "There are many ways that you can monitor your blood pressure during pregnancy. You can do the following;",
      ansOpt: [
        "Buy a blood pressure monitor from a pharmacy. To make sure that the machine is working well, take it to your doctor's office and compare the readings on your machine to the doctor's machine readings.",
        "Go to good pharmacies or other stores that have a machine that takes blood pressure readings.",
        "For the best result make sure that you take your blood pressure at the same time every day. Sit down when doing the blood pressure check. Do not cross your legs. Do not hold anything in your hand. Always use the same arm to monitor your blood pressure.",
        "Tell your doctor immediately if you have any symptoms of high blood pressure.",
      ],
      img: [require("../../assets/images/mother/Mother15and16.jpg")],
      vid: null,
    },
    {
      question:
        "What Are The Complications Of High Blood Pressure During Pregnancy?",
      ans:
        "If high blood pressure continues after 20 weeks of pregnancy, there can be complications. Preeclampsia can develop. Medication for high blood pressure during pregnancy Some traditional blood pressure medications can cause problems in pregnant women. Visit your doctor for medicine to take if you have high blood pressure when you are pregnant Talk to your doctor about how to control your blood pressure if you develop hypertension during pregnancy. High blood pressure during pregnancy doesn't usually lead to serious problems. However, if it is untreated, hypertension can become life-threatening for both mother and baby. Unfortunately, hypertensive disorders resulting from high blood pressure are the second-leading cause of maternal death during pregnancy. Always talk to your doctor about your health problems. Follow all the dos and don'ts of pregnancy care so that you can be healthy. Try to understand the factors that cause high blood pressure before you get pregnant — and take preventive measures to keep your blood pressure down during pregnancy.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother17.jpg")],
      vid: null,
    },
    {
      question: "What Is Preeclampsia?",
      ans:
        "This condition can cause serious damage to your organs, including your brain and kidneys. Preeclampsia is also known as toxaemia or pregnancy-induced hypertension. Preeclampsia with seizures becomes eclampsia. This can be fatal. Thorough prenatal care, including regular doctor's visits, should be able to address preeclampsia symptoms. Symptoms include:",
      ansOpt: [
        "Protein in a urine sample",
        "Abnormal swelling in hands and feet",
        "Persistent headaches",
      ],
      img: [require("../../assets/images/mother/Mother18.jpg")],
      vid: null,
    },
    {
      question: "How To Bend Down While Pregnant?",
      ans:
        "Remember to lower your knees instead of stretching your back. It would be better if you always got up slowly using your hands, thighs, and knees rather than straining the muscles of the belly. It will help to protect your back while allowing you to perform daily activities as your pregnancy grows. While lifting an object, don’t try to bend your head down. Just bend your knees instead.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother19.jpg")],
      vid: null,
    },
    {
      question: "How To Maintain Good Posture During Pregnancy?",
      ans:
        "Good posture during pregnancy involves training the baby to walk, sit, lie and standing positions where you do not feel any strain. The big belly may make you feel like you are going to fall. By taking this few steps, you can effectively maintain proper body mechanics. Here are a few posture tips that you must follow during pregnancy:",
      ansOpt: [
        "Sitting Posture",
        "Standing posture",
        "Driving posture",
        "The correct way to lift an object",
        "Sleeping and lying position",
      ],
      img: [
        require("../../assets/images/mother/Mother20.jpg"),
        require("../../assets/images/mother/Mother20bending.jpg"),
        require("../../assets/images/mother/Mother20drive.jpg"),
        require("../../assets/images/mother/Mother20stand.jpg"),
      ],
      vid: null,
    },
    {
      question: "Causes Of Frequent Urine During Pregnancy?",
      ans:
        "Frequent urination during pregnancy is often caused by pregnancy hormones, an increase in the amount and speed of blood circulating through your body, and your growing uterus. Hormonal changes make your blood flow to your kidney more quickly, filling your bladder more often – which causes more frequent urination during pregnancy. Your blood volume also increases throughout your pregnancy until you have almost 50 percent more blood circulating in your blood than before you got pregnant. This means much extra fluid is getting through your kidneys and going into your bladder. Your growing uterus eventually puts pressure on your bladder, further compounding the problem late in your pregnancy.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother21.jpg")],
      vid: null,
    },
    {
      question: "What Causes Tiredness During Pregnancy",
      ans:
        "Tiredness is a common symptom during pregnancy. Some women may feel tired throughout their pregnancy, while some may not feel tired at all. Changes in hormone during the early stage of pregnancy often cause tiredness and make you feel sleepy. Also, your body is producing more blood to carry nutrient to the baby in the womb. The level of sugar and blood pressure is lower. Your emotions of worry also affect how you feel physically. During the last three months of pregnancy, tiredness is caused by the extra weight of the baby.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother22.jpg")],
      vid: null,
    },
    {
      question: "How to cope with tiredness During Pregnancy",
      ans: null,
      ansOpt: [
        "Rest– Sleep more when you are tired. Try to sleep earlier at night and has a short sleep during the day. Reduce the quantity of liquid you drink before you sleep so that you will not get up more to urinate at night.",
        "Adjust Schedule – reduce the amount of work you do. Get people to help so that you would not get tired often.",
        "Eat a Balanced Diet– Eat nutritious food to help increase your energy. Take enough protein and iron. Take enough water to keep you hydrated.",
        "Moderate Exercise – moderate exercise such as a 30-minute walk will make you feel strong. But ask from your health care provider before you do any exercise.",
      ],
      img: [require("../../assets/images/mother/Mother23.jpg")],
      vid: null,
    },
    {
      question: "Sex During Pregnancy",
      ans:
        "When the pregnancy is normal it is possible for you to keep having sex till you are about to deliver. But sometimes due to such health issues you may need to stop having sex during your pregnancy. Your health care provider will advise on what is best for you.",
      ansOpt: null,
      img: [
        require("../../assets/images/mother/Mother24a.jpg"),
        require("../../assets/images/mother/Mother24b.jpg"),
        require("../../assets/images/mother/Mother24c.jpg"),
        require("../../assets/images/mother/Mother24d.jpg"),
        require("../../assets/images/mother/Mother24e.jpg"),
        require("../../assets/images/mother/Mother24f.jpg"),
      ],
      vid: null,
    },
    {
      question: "Emotional Care And Diet during Pregnancy",
      ans:
        "Apart from the hygiene routine, you also need to take care of the following",
      ansOpt: [
        "You must relax during pregnancy and lactation period. Emotional disturbances and stress affect milk secretion.",
        "You must take a balanced diet rich in iron and protein. Also, ensure you get adequate vitamins and calcium. Include vegetables and fruits wisely to increase your daily water intake.",
        "If you experience tender and sensitive breast, it is caused by the hormones. Pregnancy is the time when milk-producing ducts start developing and are stretched to fill milk. This makes your breasts all the more sensitive, the nipples particularly.",
      ],
      img: [require("../../assets/images/mother/Mother25.jpg")],
      vid: null,
    },
    {
      question: "Preventions of Problems During Pregnancy",
      ans:
        "To avoid problems of any sorts, make sure to follow the prevention measures properly. Here is what to do:",
      ansOpt: [
        "Wash your breasts with clean water daily",
        "Make sure to inspect your breasts on a regular basis.",
        "If you notice any changes or discomforts in your breast, make sure to inform your health care provider as early as possible.",
        "Do not keep your breasts wet as that might lead to cracks in the nipples.",
      ],
      img: [require("../../assets/images/mother/Mother26.jpg")],
      vid: null,
    },
    {
      question:
        "What kind of sign during sex should Make Me call my doctor or midwife?",
      ans:
        "When you are going through anything, call your doctor or midwife.  It's normal to feel some cramping during or just after intercourse or orgasm, but if it doesn't go away after a few minutes, or if you have any pain or bleeding after sex, call your caregiver.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother27.jpg")],
      vid: null,
    },
    {
      question: "What Causes Vaginal Discharge During Pregnancy?",
      ans:
        "When you become pregnant, your body changes in many ways. One of the first changes you may experience is in your vaginal discharge. Changes in your vagina discharge are normal but tell your doctor if you notice anything abnormal.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother28.jpg")],
      vid: null,
    },
    {
      question: "What Are the Dos and Don'ts of Pregnancy?",
      ans: "During pregnancy do not:",
      ansOpt: [
        "During pregnancy do not: a) Use tampons-because they can bring new germs into the vagina. b) Flush the vagina with water or other fluids. Some mix water mixed with vinegar, iodine or baking soda. It is not good because it can change the normal balance of healthy bacteria in the vagina and lead to infection. c) Treat infections by yourself. Always allow the doctor to test and treat you.",
        "During pregnancy do: a) Use panty liners if it makes you more comfortable. b) Inform your health care provider of any changes that you see. c) Rest well- it will help you gain strength. d) Do not overwork- it will lead to fatigue, and it may cause complications.",
      ],
      img: [require("../../assets/images/mother/Mother29.jpg")],
      vid: null,
    },
    {
      question:
        "When Should I Tell My Health Care Provider About My Vaginal Discharge?",
      ans:
        "You should tell your health care provider any time there is a change in normal pregnancy discharge. NEVER try to diagnose and treat yourself.  Blood spotting during pregnancy can be normal but should be mentioned to your health care provider. Inform your doctor immediately if you experience spotting or bleeding that is enough to fill a pad or tampon, lasts longer than a day, and is you are feeling cramps or pain.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother30.jpg")],
      vid: null,
    },
    {
      question:
        "Why A Pregnant Woman May Not Able To Take Solid Foods During Third Trimester?",
      ans:
        "It normal for a pregnant woman to have many uncommon discomforts and complains. A pregnant may not be able to take solid food because of the feeling being full always. The size of the baby causes this feeling in the belly. This may lead to uneasy feelings when you eat heavy food. Do not be worried, it is normal, but if you are unable to eat food at all, please see your health care provider. Check What is the Common Third Trimester of Pregnancy Condition?",
      ansOpt: [
        "Lack of Appetite- Many women they have a low appetite during the last three months of pregnancy. One reason is the pressure of the growing fetus on your abdomen. There is less room for food. The best way to cope is to eat something, even a small snack, every 3 to 4 hours. Don't drink water or juice with a meal. This is because liquid fills your stomach quickly, leaving less room for solid food.",
        "Constipation- Constipation is common among women in the first trimester and the final months of pregnancy. Take more fluid, fruits, and vegetables to help you pass feces easily.",
        "Edema- Sometimes extra water accumulates in your body. This can lead to swelling on your legs and feet. To reduce this symptom, take less or remove salt from your food, place your feet on a stool when you want to sit down for long.",
        "Shortness of Breath/Fatigue- During the last three months of pregnancy, you will be carrying a heavy load because of the increase in growth of the fetus. Your expanding uterus puts pressure on the respiratory system and leads to shortness of breath and tiredness. Sometimes you may not be able to sleep well because you are feeling uncomfortable. When you do not have enough sleep, it can lead to fatigue.",
        "Indigestion and Heartburn- The growing fetus will put pressure on the digestive tract and cause some of the things in the stomach to go back up into the throat. This causes heartburn. To reduce heartburn, eat small meals at regular intervals, chew your food thoroughly and eat slowly. Do not lie down immediately after eating.",
        "High Blood Pressure- when Edema is serious it can be a sign of pre-eclampsia which causes high blood pressure. Sometimes there is hypertension caused by pregnancy. The high blood pressure can hinder blood flow to the placenta and deprive the fetus oxygen and nutrients. If you have hypertension you need to get more rest, do not stand for long and if you want to sit for long put your feet on a small stool or pillow.",
        "Urinary Tract Infections- Urinary Tract infections are common during pregnancy. During the last trimester it may lead to kidney infection if it not properly treated. Kidney infection can cause forced labor.",
      ],
      img: null,
      vid: null,
    },
    {
      question: "Guidelines For Exercise During Pregnancy",
      ans:
        "When our exercise moderately you prevent serious complications such as pre-eclampsia, high blood pressure. Moderate exercise during pregnancy can prevent some aches and pains due to increase body weight. The experience during pregnancy is different for everyone and each pregnancy so take care and ask your doctor for guidance.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother33.jpg")],
      vid: null,
    },
    {
      question: "Stomach Pain During Pregnancy",
      ans:
        "Stomach pain occurs during pregnancy as a result of your body changing to accommodate your growing baby. Some stomach pains can be serious so when you find that the pain is much, complain to your health care provider.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother34.jpg")],
      vid: null,
    },
    {
      question: "Common Causes of Stomach Pain During Pregnancy",
      ans:
        "Some stomach pains during pregnancy are quite common and generally is not dangerous to you and your baby. Some common pains include:",
      ansOpt: [
        "Round Muscle Pain: this pain is sharp and like a stab that you feel when you change positions. It can also be a dull pain that remains for some time. Round muscle pain is caused by the two large muscles that run from your uterus to your anus.  As the uterus grows bigger, these muscles are stretched and causes discomfort. This pain is common in the second trimester and is harmless.",
        "Gas and Constipation: Gas during pregnancy is caused by high levels of a hormone.  The more this hormone is released, your intestine's work slows down, and it makes food travel more slowly. To reduce the number of time that this pain happens, drink plenty of water, eat foods rich in fiber and exercise.",
        "Practice contractions: Practice contraction is not dangerous to you and your baby. Many women report that this contraction feels like a tightening of the stomach muscles so that stomach feels firm or hard. It feels like real labor contraction. It is important to know the difference between practice contractions from true contractions. The real contraction will be closer together, last for a longer period, and are painful. True contractions will take your breath away and disturb your normal activities. However, practice contraction will allow you to carry on your normal activities. Also, doctors report that this can be caused by dehydration, so drinking plenty of water can help eliminate this problem.",
        "General Discomforts: It is common for pregnant women to have discomfort due to growing uterus, sensitivities to foods and changing body.",
      ],
      img: [require("../../assets/images/mother/Mother35.jpg")],
      vid: null,
    },
    {
      question: "Types of Serious Stomach Pain During Pregnancy",
      ans:
        "Although many women who experience stomach pain have healthy pregnancies, there are times when stomach pain can be a serious risk.  If you have any severe symptoms, such as those discussed below, please consult your medical care provider immediately.",
      ansOpt: [
        "Pregnancy Outside The Womb: This occurs in 1 out of 50 pregnancies. A pregnancy outside the womb is when the egg is growing anywhere outside the womb.  Most often, the egg is implanted in the fallopian tube. But an ectopic pregnancy cannot continue to full term, and it requires medical treatment.  When a woman has an ectopic pregnancy, there may be severe pain and bleeding between 6th and 10th weeks of pregnancy. An ectopic pregnancy is common among women who have had an ectopic pregnancy in the past or have had endometriosis, a tubal ligation, or an intrauterine device (IUD) at time of conception.",
        "Placental breakage: Placental breakage is a life-threatening condition in which the placenta separates from the uterus before the baby is born. A symptom of placental abruption is constant pain that causes the stomach to stay hard for a long period without relief. Another sign is the flow of bloody fluid or premature breakage of water. Also, there may be tenderness in the stomach, back pain, or fluid discharge with blood.",
        "Miscarriage: It is the most common form of pregnancy loss. A miscarriage often happens in the first 13 weeks of pregnancy. Signs of a miscarriage include mild to severe back pain, true contractions (happening every 5-20 minutes), tissue or clot-like material passing from the vagina, brown or bright red bleeding with or without cramps, and a sudden decrease in other signs of pregnancy.",
        "Urinary Tract Infection: Urinary Tract Infection can be easily treated during pregnancy but if it is ignored it can cause complications. The signs are; pain, discomfort, and burning when urinating. Also, there can be a lower belly pain, nausea, fever, sweats or cold go for a medical checkup immediately case.",
        "Preeclampsia: Symptoms of Preeclampsia are high blood pressure and protein in the urine after 20-weeks pregnancy. There can be a pain in the upper part of the belly, usually under the ribs on the right side, nausea, vomiting and increased pressure on the stomach.",
      ],
      img: [require("../../assets/images/mother/Mother36.jpg")],
      vid: null,
    },
    {
      question: "When Should I Call My Doctor?",
      ans:
        "Please call your health care provider immediately if you have any of the following symptoms with abdominal pain or discomfort:",
      ansOpt: [
        "Cold",
        "Severe or continuous pain",
        "Dizziness",
        "Fever",
        "Spotting or bleeding",
        "Nausea and vomiting",
        "Vaginal discharge",
        "Discomfort while urinating",
      ],
      img: [require("../../assets/images/mother/Mother37.jpg")],
      vid: null,
    },
    {
      question: "Breastfeeding",
      ans:
        "Breast milk provides the best nutrition for infants. It has the best mix of everything that your baby needs such as proteins, vitamins, and fat. Breastmilk is easily digested than baby food. Breast milk contains antibodies that help your baby fight diseases. Exclusive breastfeeding is breastfeeding baby with only breast milk for the first 6 months without giving anything else reduces the risk of your baby having asthma or allergies, diarrhea, ear infections, respiratory illnesses, and hospitalizations.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother38.jpg")],
      vid: null,
    },
    {
      question: "Importance of Breastfeeding to The Mother",
      ans:
        "Breastfeeding can help you to lose weight gained during pregnancy faster. It helps your uterus contract back to its size before pregnancy. Breastfeeding helps to reduce bleeding after birth. Breastfeeding also lowers your risk of breast and ovarian cancer. It may lower your risk of osteoporosis, too. It saves time and money. It also gives mothers regular time to relax quietly with their baby. Breastfeeding makes mothers closer to their baby. Breastfeeding saves money- there is nothing to buy. Breastfeeding reduces poverty because it is free. See also the importance of breastfeeding to the baby under general health section.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother39.jpg")],
      vid: null,
    },
    {
      question: "What Makes Breast Milk to Come?",
      ans:
        "During pregnancy, the placenta helps the body to produce hormones to develop the milk making process in the breasts. After the birth of the baby, there is a decrease in a hormone called progesterone which makes the breasts to start producing milk about 32-40 hours after birth. Another hormone called Oxytocin helps the milk to flow out of the breast at each time you feed the baby.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother40.jpg")],
      vid: null,
    },
    {
      question: "When Does Breast Milk Come Into The Breast?",
      ans:
        "Breast milk starts to come in about two to three days after delivery of the baby. Colostrum comes first followed by regular breast milk. Breast milk flow increases as the baby suck the breast, or you use a breast pump or hand to express milk from the breast. If milk is not removed from the breast, milk production will stop.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother41and42.jpg")],
      vid: null,
    },
    {
      question: "What Causes Delay in Breast Milk Flow?",
      ans:
        "Although breast milk comes out within three days of delivery, sometimes it may take up to five days. Do not panic that your breast milk is not coming on time because that does not mean that it will not come at all. The more you become worried about it, the worse it can become because worry will affect the flow of the milk. Keep giving the breast for the baby to suck to help start the flow of milk. If you have this problem, speak to your health provider. Some factors cause delayed breast milk flow. They include;",
      ansOpt: [
        "Premature delivery may make the breast not produce enough milk. It is because the pregnancy did not go through the whole process of development hence the body does not that time to prepare the breast for milk production",
        "Very stressful birth such as long labor, long pushing stage, cesarean section or use of forceps can cause a delay in breast milk flow",
        "Damage in nerves connected to milk flow or shift in the bones of the spine.",
        "A large number of drips used during delivery can accumulate in the breast and delay the production of milk.",
        "Retained part of the placenta can cause the milk production to delay because the hormone called progesterone will remain high. It is when progesterone reduces that milk production will start.",
        "Losing much blood may damage a part of the brain that controls breast milk.",
        "Delivery of heavy babies at the first birth may delay of milk production.",
        "The pain relief given during childbirth can cause a delay in breast milk flow.",
        "Separation of the baby from its mother for long may lead to a delay in breast milk flow. Breastfeeding the baby within the first hour after delivery helps to stimulate good milk production.",
        "Overweight or obesity is linked to reducing breast milk production because it disturbs the body from responding to the hormone that produces milk.",
      ],
      img: [require("../../assets/images/mother/Mother41and42.jpg")],
      vid: null,
    },
    {
      question: "What Causes Pains After Delivery of baby?",
      ans:
        "Pains after delivery are pains caused by contraction of the womb.  The contraction is to make the womb return back to its size before pregnancy and helps to reduce loss of blood after delivery. Pain after delivery can be mild or serious depending on the number of births and the way the muscle of the stomach is. Breastfeeding the baby makes the womb to contract. Often the pain after delivery is much after first one or two days after delivery and reduces after the third day. It can take six or more weeks after delivery before the womb contracts to its normal size.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother43and44.jpg")],
      vid: null,
    },
    {
      question: "How Can I Relieve The Pains that Comes After Delivery?",
      ans: "The following can help;",
      ansOpt: [
        "Massage your lower belly gently.",
        "Lie face down with a pillow under your lower belly.",
        "Lie face down with a warm heating pad under your lower belly.",
        "Try to urinate often even when you don't feel like. It is because a full bladder disturbs the uterus from contracting completely.",
        "Take a pain reliever. Always ask your health provider before you take any medication.",
      ],
      img: [require("../../assets/images/mother/Mother43and44.jpg")],
      vid: null,
    },
    {
      question: "Placenta Previa",
      ans:
        "The placenta is made up of cells that form inside the womb during pregnancy. Placenta carries oxygen and nourishment from mother to the fetus, and it carries waste products and carbon dioxide from the fetus to the mother through the umbilical cord. Placenta normally grows in the upper part of the uterus. It allows more space for the fetus to grow. Placenta previa is when the placenta forms very low in the womb or over the entrance of the womb and cause blockage of normal delivery of the baby. There are three types of placenta previa",
      ansOpt: [
        "Complete placenta previa: The placenta completely covers the internal entrance of the womb.",
        "Partial placenta previa: The placenta covers part of the internal opening.",
        "Marginal placenta previa: The placenta is at the edge of the internal opening of the womb.",
      ],
      img: [require("../../assets/images/mother/Mother45-47.jpg")],
      vid: null,
    },
    {
      question: "Causes Of Placenta Previa",
      ans: null,
      ansOpt: [
        "The fertilized egg implanted very low in the uterus, causing the placenta to form close to or over the cervical opening.",
        "The placenta formed abnormally.",
        "The mother is older. The risk of developing placenta previa is 3 times higher in women over 30 years of age than women under 20 years of age.",
        "The mother may have had several previous pregnancies. The chances of developing placenta previa are increased to 1 in 20 for women who have had 6 or more pregnancies.",
        "The lining of the womb has abnormal things such as fibroids or scar from previous Previa, cuttings, cesarean sections or abortions.",
        "The pregnancy is multiple such as twins or triplets. The chances of developing placenta previa are doubled for these pregnancies.",
        "The mother smokes or uses cocaine. Smoking and cocaine use can increase the risk of this condition.",
        "The pregnancy was with the help of assisted reproductive technology, such as in-vitro fertilization.",
      ],
      img: [require("../../assets/images/mother/Mother45-47.jpg")],
      vid: null,
    },
    {
      question: "Symptoms Of Placenta Previa",
      ans:
        "Sometimes there can be little bleeding during the first and second trimester of pregnancy. The color of the blood may be bright red, and it may start and stop, then restart after several days or weeks. Sudden and much bleeding may occur in the third trimester of pregnancy. The bleeding does not usually come with pain. There may be pain during bleeding in some women. In 7% to 30% of women who have placenta previa, there may be no bleeding at all. The bleeding happens because as the pregnancy is growing, the placenta removes from the walls of the womb. In the third trimester, the walls of the womb become thinner and spread to give room to the growing fetus. If placenta previa is present, the placenta is attached very low on the womb wall. This thinning of the walls of the womb makes the placenta stretch and tear away from the wall of the womb, leading to bleeding. The possible complications of placenta previa:",
      ansOpt: [
        "Infection and formation of blood clots",
        "Unborn baby has pain due to low oxygen supply",
        "Slow growth of the baby due to insufficient blood supply",
        "Shock and death of the mother if the bleeding is too much",
        "Baby may have anemia",
      ],
      img: [require("../../assets/images/mother/Mother45-47.jpg")],
      vid: null,
    },
    {
      question: "Management Of Placenta Previa",
      ans:
        "To reduce bleeding and complications, the mother should have complete bed rest possibly in the hospital. Also, pelvic examinations or any sexual activity that may lead to irritation of the cervix or the uterine walls should be avoided. If the diagnoses indicate complete placenta previa, your doctor may advise a cesarean section for the delivery of the baby. This is because normal delivery might result in the placenta tearing and bleeding, thereby putting the mother and the baby at risk.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother48.jpg")],
      vid: null,
    },
    {
      question: "What Food Can A Mother With Low Blood After Delivery Take?",
      ans: null,
      ansOpt: [
        "Oatmeal- Oatmeal is a very good source of iron which is essential for mothers who have anemia after pregnancy. Research has shown that anemia can cause a low level of breast milk flow. Oatmeal is easy to make, and because it contains iron, it helps to build blood.",
        "Garlic- Garlic is good food that contributes to increasing breast milk production in mothers. Garlic also makes your food taste better.",
        "Green Pawpaw- Eating unripe pawpaw helps in increasing the production of breast milk. You can boil it and eat it.",
        "Carrots- Carrots can also help with breastfeeding; Carrot contains Vitamin A which is necessary for your baby's growth.",
        "Spinach- It is also a good source of iron, but you should boil it before eating.",
        "Nuts- Nuts such as groundnut, cashew, etc. help with the production of breast milk.",
      ],
      img: [
        require("../../assets/images/mother/Mother49a.jpg"),
        require("../../assets/images/mother/Mother49b.jpg"),
        require("../../assets/images/mother/Mother49c.jpg"),
        require("../../assets/images/mother/Mother49d.jpg"),
        require("../../assets/images/mother/Mother49e.jpg"),
        require("../../assets/images/mother/Mother49f.jpg"),
      ],
      vid: null,
    },
    {
      question: "What Causes Bleeding After Delivery?",
      ans:
        "After a baby is delivered, the womb normally continues to reduce in size by tightening the muscle of the womb so that the placenta can be pushed out. After the placenta comes out, the tightening of the muscle helps reduce the bleeding in the womb. If the uterus does not shrink strongly enough the bleeding will continue. This is the most common cause of bleeding after delivery. Sometimes if small pieces of the placenta remain attached to the womb, bleeding can happen. Some things can make bleeding to happen after delivery. They are;",
      ansOpt: [
        "The placenta removes early from the womb",
        "The placenta is covering the opening of the womb",
        "High blood pressure during pregnancy",
        "Many deliveries of babies before",
        "Long labor",
        "Obesity",
        "Use of medicine to cause labor",
        "Infection",
        "Use of medicine to stop labor",
        "Use of forceps or vacuum-assisted delivery",
        "General anesthesia",
        "Cut in the womb",
        "Blood not clotting",
      ],
      img: [require("../../assets/images/mother/Mother50.jpg")],
      vid: null,
    },
    {
      question: "Child Spacing",
      ans: "Key facts on child spacing",
      ansOpt: [
        "214 million women of reproductive age in developing countries who want to avoid pregnancy are not using a modern child spacing method.",
        "Some child spacing methods, such as condoms, help prevent the transmission of HIV and other sexually transmitted infections.",
        "Child spacing reduces the need for abortion, especially unsafe abortion.",
        "Child spacing reinforces people's rights to determine the number and spacing of their children.",
        "By preventing unintended pregnancy, child spacing prevents deaths of mothers and children.",
        "Child spacing allows people to attain their desired number of children and determine the spacing of pregnancies. It is achieved through the use of pregnancy prevention methods and the treatment of infertility. (See Benefits of child spacing, Pregnancy prevention methods under General Health.)",
      ],
      img: [require("../../assets/images/mother/Mother51.jpg")],
      vid: null,
    },
    {
      question: "What is the most effective type of birth control?",
      ans:
        "Some factors determine the effectiveness of the birth control method. The factors include; age of the woman, health condition such as heart diseases, high blood pressure, cancer, etc., your choice, whether the woman is breastfeeding or not.",
      ansOpt: null,
      img: [require("../../assets/images/mother/Mother52.jpg")],
      vid: null,
    },
  ],
  spouse: [
    {
      question: "What Causes Lack Of Ejaculation?",
      ans:
        "Lack of ejaculation is caused by sperm entering into the bladder instead of out of the tip of the penis. Lack of ejaculation can be caused by diabetes, injury in the spine, diabetes, surgery of the prostate, urethra, and bladder.",
      ansOpt: null,
      img: [require("../../assets/images/spouse/Spouse1and2.jpg")],
      vid: ["https://www.youtube.com/watch?v=h6xBne6GBd0"],
    },
    {
      question: "What Are Erection Problems?",
      ans:
        "An erection problem is when a man cannot make or keep his penis firm enough for him to have sex. An erection problem is also called impotence. Erection problem can start at any age, but it is common among men who are older, men who have other health issues. Most men have erection problem once in a while, and it is normal.",
      ansOpt: null,
      img: [require("../../assets/images/spouse/Spouse1and2.jpg")],
      vid: null,
    },
    {
      question: "What Causes Erection Problems?",
      ans:
        "Erection problems have many causes. The causes of erection problems include:",
      ansOpt: [
        "Drinking too much alcohol or smoking.",
        "Other health problems, such as diabetes, high blood pressure, anxiety, and depression.",
        "Stress",
        "Side effects of some medicines.",
        "Physical problems, such as injury to nerves or loss of blood supply to the penis.",
        "Surgeries including prostate cancer surgery.",
      ],
      img: [require("../../assets/images/spouse/Spouse3.jpg")],
      vid: null,
    },
    {
      question: "What Are The Symptoms?",
      ans:
        "The only symptom of an erection problem is the man is not able to get and keep an erection that is strong enough to have sex. A man that has even an erection problem can still have sexual desire, have an orgasm and ejaculate.",
      ansOpt: null,
      img: [require("../../assets/images/spouse/Spouse4.jpg")],
      vid: null,
    },
    {
      question: "How Are Erection Problems Diagnosed?",
      ans:
        "The doctor will ask questions about the man's health and carry out a physical examination of the man. The doctor will want to know how often the problem happens. He may do a laboratory test and sometimes a mental health test. The doctor can find out if there is an erection problem by asking questions about your health and doing a physical exam. The healthcare provider will want to know how often the problem happens. The doctor's examination, lab tests, and sometimes mental health tests can help find out the cause of the problem.",
      ansOpt: null,
      img: [require("../../assets/images/spouse/Spouse5and6.jpg")],
      vid: null,
    },
    {
      question: "How To Treat An Erection Problem?",
      ans:
        "Treatment of erection problem included many things. The treatment can include",
      ansOpt: [
        "Avoiding tobacco and drugs and reducing the drinking of alcohol.",
        "Identifying and stopping medicines that may be causing the problem.",
        "Talking about the issue with your partner",
        "Doing sensual exercises and counseling",
        "Surgery in the penis and medications.",
      ],
      img: [require("../../assets/images/spouse/Spouse5and6.jpg")],
      vid: null,
    },
    {
      question: "Will My Pregnancy Affect My Partner's Sexual Interest?",
      ans:
        "Yes, it may affect your partner's sex drive. Your pregnancy may make you more attractive to your partner, and he may want more sex. It is also possible that your partner becomes worried about the pregnancy, and the burden of being a parent. This may make his sex urge to reduce. Discussing your fears and concerns is important. It will help both of you to relax and enjoy each other.",
      ansOpt: null,
      img: [require("../../assets/images/spouse/Spouse7.jpg")],
      vid: null,
    },
  ],
  sex: [
    {
      question: "What Could Be The Causes Of Rashes To Private Parts?",
      ans:
        "The most common cause of rashes around the private parts is due to infection from germs. Rashes around the sex organs are sometimes due to water and coolness around the organs, and wearing tight and thick clothes for a long time. Rashes around sex organs may be due to an allergic reaction and sexually transmitted diseases.",
      ansOpt: null,
      img: [require("../../assets/images/sex/Sex1.jpg")],
      vid: null,
    },
    {
      question: "What Could Be The Causes Of Rashes To Private Parts?",
      ans:
        "Syphilis is an infection that often spreads through sex. The symptom of syphilis is a wound that is not painful around the sex organs, anus or mouth. Syphilis spreads from person to person through contact with the wound. There are different types of syphilis, but generally, syphilis remains in the body after the wounds have gone. Syphilis can be cured early, but if it is untreated, it may cause damage to the brain, heart and other organs. Syphilis can be transferred from a pregnant woman to an unborn baby. A newborn baby with syphilis usually does not have symptoms, but some babies have symptoms. The symptoms include deafness, teeth deformities, and deformed nose. Some factors that makes a person likely to get syphilis includes; having sex with more than one partner, men who have sex with men, having sex without condoms and having HIV infection.",
      ansOpt: null,
      img: [require("../../assets/images/sex/Sex2.jpg")],
      vid: null,
    },
    {
      question: "Sexually Transmitted Infection",
      ans:
        "Sexually transmitted diseases (STDs) are infections that are transmitted from one person to another by sex. The causes of STDs are different types of germs. There are many more than 20 types of STDs, including",
      ansOpt: [
        "Chlamydia",
        "Genital herpes",
        "Gonorrhea",
        "HIV/AIDS",
        "HPV",
        "Syphilis",
        "Trichomoniasis",
      ],
      note:
        "Most STDs affect both women and men, but often the health problems caused is more serious for women. If a pregnant woman has an STD, it can affect the health of the baby. Antibiotics can treat STDs caused by bacteria, yeast, or parasites. But there is no cure for STDs caused by a virus, but medicine can often help with the symptoms and control the disease.",
      img: [require("../../assets/images/sex/Sex3.jpg")],
      vid: null,
    },
    {
      question: "Does sex during pregnancy harm the baby?",
      ans:
        "No, sex during pregnancy cannot harm the baby. The placenta and the womb muscles protect the baby. Also, there is a thick plug that covers the entrance of the womb which helps to guard against infections. The penis cannot get to the womb where the baby is.",
      ansOpt: null,
      img: [require("../../assets/images/sex/Sex4and11.jpg")],
      vid: null,
    },
    {
      question: "Can Having Sex Cause Premature Labor?",
      ans:
        "No, having sex cannot cause labor. Sexual arousal or orgasm cannot start labor or cause miscarriage. Although orgasm can cause mild contractions temporarily. It is generally not harmful.",
      ansOpt: null,
      img: [require("../../assets/images/sex/Sex5.jpg")],
      vid: null,
    },
    {
      question: "Will Sex Feel Different Now That I Am Pregnant?",
      ans:
        "Sex may feel different when you are pregnant. Your interest in sex may increase or decrease and it may become more pleasurable. This is because more blood flows into the sexual parts and makes it swollen. Sometimes it may be less pleasurable during some period of pregnancy. This may be due to your dislike of how the changes feel. During pregnancy, your breast may become soft and sensitive to touch. This may increase your sexual desire level, or you may not like it so it may decrease your sexual desire.",
      ansOpt: null,
      img: [require("../../assets/images/sex/Sex6.jpg")],
      vid: null,
    },
    {
      question: "Sex positions during pregnancy",
      ans:
        "Enjoying different sex positions during pregnancy is possible. Let your partner know if you feel uncomfortable, or experiencing pain in any style. Below are some sex positions and how to practice it.",
      ansOpt: null,
      img: [
        require("../../assets/images/sex/Sex7a.jpg"),
        require("../../assets/images/sex/Sex7b.jpg"),
        require("../../assets/images/sex/Sex7c.jpg"),
        require("../../assets/images/sex/Sex7d.jpg"),
        require("../../assets/images/sex/Sex7e.jpg"),
        require("../../assets/images/sex/Sex7f.jpg"),
      ],
      vid: ["https://www.youtube.com/watch?v=dEWcJIELHGU"],
    },
    {
      question: "Is it Normal to have a low sex urges since I got pregnant?",
      ans:
        "It is normal to have low sex urges during pregnancy. But do not be discouraged, your sexual urges may return to normal during the second trimester. Also, try to be less worried about your body and the baby. Please check Will sex feel different now that I'm pregnant?",
      ansOpt: null,
      img: [require("../../assets/images/sex/Sex8.jpg")],
      vid: null,
    },
    {
      question: "Is Oral Sex Safe When I'm Pregnant?",
      ans:
        "Oral sex during pregnancy may not be safe in some instances. Do not allow blowing into your vagina. It is because it can cause an air bubble to get into your blood circulation. Although this occurs rarely, it is dangerous to you and the baby. Licking your partner penis is not safe if he has Sexually Transmitted Infections (STI) such as herpes. Also, if you have STI, he should not give you oral sex. If your partner is HIV positive do not do oral sex. It is because research shows that HIV can be transmitted through tiny cuts in a person's mouth and saliva. Ask your doctor if you have other questions.",
      ansOpt: null,
      img: [require("../../assets/images/sex/Sex9.jpg")],
      vid: null,
    },
    {
      question:
        "How can I protect myself from Sexually Transmitted Infections (STI)?",
      ans:
        "You are at risk of STI if you have sex with more than one partner or your partner has sex with other people. So, to protect yourself and your partner you should do the following things. 1. Keep only one sexual partner 2. Use Condoms every time you want to have sex. Make sure you always wear the condom correctly every time you want to use it. How to use condoms correctly",
      ansOpt: null,
      img: [require("../../assets/images/sex/Sex10.jpg")],
      vid: null,
    },
    {
      question: "Which are the best sexual positions when I'm pregnant?",
      ans:
        "The best sex position during pregnancy is those that make you feel comfortable. To learn more, please check Sex positions during pregnancy.",
      ansOpt: null,
      img: [require("../../assets/images/sex/Sex4and11.jpg")],
      vid: null,
    },
    {
      question:
        "What kind of sign during sex should prompt a call to my doctor or midwife?",
      ans:
        "When you are feeling anything that is not normal call your doctor.   It is normal to feel some tightness during or just after intercourse or orgasm.  If it the tightness doesn't go away after a few minutes, or if you have any pain or bleeding after sex, tell your doctor.",
      ansOpt: null,
      img: [require("../../assets/images/sex/Sex12.jpg")],
      vid: null,
    },
  ],
  health: [
    {
      question: "What Is Colostrum?",
      ans:
        "Colostrum is the first breast milk that comes out of the breast after delivery of a baby. It is produced in the breast during pregnancy before the baby is born. Colostrum is low in volume but very good in building immunity to disease. The colostrum is made in the breasts a long time before a baby is born. Naturally, after the birth milk begins to be produced. Colostrum will come first after you start to put the baby to the breast.",
      ansOpt: null,
      img: [require("../../assets/images/health/GeneralHealth1.jpg")],
      vid: null,
    },
    {
      question: "Why Does My Heart Beat Fast For No Reason?",
      ans:
        "When the heart beats fast for no reason, it may not be serious, and it will go away by itself. But it may be a symptom of something serious. A fast heartbeat may be because of the following;",
      ansOpt: [
        "Anemia",
        "Damage to heart tissues from heart disease",
        "Abnormal heart waves from birth",
        "Disease of the heart",
        "Exercise",
        "Smoking",
        "Sudden stress, such as fright",
        "Fever",
        "High or low blood pressure",
        "Drinking too much alcohol",
        "The side effect of some medicines",
        "Drinking too many soft drinks, energy drink, tea, coffee, energy shots, and some fruit or fruit-flavored and water drinks. Also, taking too much ice-cream, Kolanut, and chocolate.",
        "Drugs abuse",
        "Overactive thyroid",
      ],
      img: [require("../../assets/images/health/GeneralHealth2.jpg")],
      vid: null,
    },
    {
      question: "What Causes Fear?",
      ans:
        "Fear occurs when a person feels threatened. Fear is a natural emotion that helps our bodies to respond to danger by responding with a fight or running away from it.  So, fear is important to keep us safe.",
      ansOpt: null,
      img: [require("../../assets/images/health/GeneralHealth3.jpg")],
      vid: null,
    },
    {
      question: "What Causes Eye Infections Or Pains?",
      ans:
        "Eye infection can be caused can be germs. The signs of eye infections include; pain, tears dropping from the eyes, feeling that something is in the eyes, the eye is itching, small swelling under the eyelid or below the eyelashes, feeling of peppery and the eye is painful when there a light or it is bright.",
      ansOpt: null,
      img: [require("../../assets/images/health/GeneralHealth4.jpg")],
      vid: null,
    },
    {
      question: "What Causes Jaundice In Adults?",
      ans:
        "Jaundice is when the white part of the eye and skin is yellow in color. It is a sign of disease of the liver, gallbladder, pancreas or blood. Jaundice occurs when there is too much waste product of destroyed red blood cell in the blood.",
      ansOpt: null,
      img: [require("../../assets/images/health/GeneralHealth5.jpg")],
      vid: null,
    },
    {
      question: "What Causes Chest cold?",
      ans:
        "Chest cold is when the lungs and the part of the body use for breathing are infected with germs. Chest cold is common in cold weather. It usually starts with a cough. The symptoms of chest cold include; mucus from the nose, mild headache, watery eyes, and sore throat. Chest cold is common among, pregnant women, people who smoke, elderly and young children, people who have low ability to fight diseases such as people who have cancer, asthma, heart diseases, etc. You can prevent chest cold by covering your mouth correctly every time you sneeze, wash your hands regularly.  Do not use tissue over and over again. Throw away used tissue papers on time.",
      ansOpt: null,
      img: [require("../../assets/images/health/GeneralHealth6.jpg")],
      vid: null,
    },
  ],
};

export default data;
