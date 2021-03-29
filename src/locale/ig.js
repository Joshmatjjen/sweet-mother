import babyImg from "../../assets/images/home/baby.jpeg";
import siblingImg from "../../assets/images/home/sibiling.jpeg";
import motherImg from "../../assets/images/home/mother.jpeg";
import spouseImg from "../../assets/images/home/spouse.jpeg";
import sexImg from "../../assets/images/home/sex.jpeg";
import healthImg from "../../assets/images/home/health.jpeg";

const data = {
  home: [
    { id: 1, name: "Umuaka Amuru Ohuru", img: babyImg },
    { id: 2, name: "Umuaka", img: siblingImg },
    { id: 3, name: "Maka Nne", img: motherImg },
    { id: 4, name: "Di na nwunye", img: spouseImg },
    { id: 5, name: "Mmekọahụ", img: sexImg },
    { id: 6, name: "Ahụ Ike", img: healthImg },
  ],
  baby: [
    {
      question: "Gini mere umuaka ji agbo agboo?",
      ans:
        "Isi ihe mere umu amuru ohuru ji agboo agboo izu ole n’ole mgbe amusiri ha bu n a ikuku n’abanye n’ara ha nuru mgbe ha biri ubiri. Ihe ozo bu n’ akwara ndi di n’ afo ha esibeghi ike.Nye ndi okenye, akwara ndi a n’emepe ka nri banye ma mechiekwa ngwa ngwa nri banyeresiri.Nani obere iku ume puru ime ka nke nwa ohuru mepee, mgbe ahu mmiri ara ha nuru puru iputa. Ihe ozo bu imado nwa ohuru n’azu ma- obu n’apata ukwu ogologo oge Ihe ozo n’akpata ya bu inye nwa ohuru oke nri.Mgbe afo nwa ohuru juru, o ga – agbopu ufodu n’ime nri oriri. Ka nwa ohuru n’eru onwa isi rue otu afo igboo ihe ga - eji nwayoo nwayoo n’ebelata.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby1.jpg")],
      vid: null,
    },
    {
      question: "Otu a puru isi belata ahu oku nwa ohuru.",
      ans: null,
      ansOpt: [
        "Nye ya ogwu dokita si gi nye ya.",
        "Kporo ya ga ulogwu, ma nye ya ogwu dika dokita si tuzie aka.",
        "Nye mmiri di nari-nari esiri n’oku. Jiri mmri di ‘nari-‘nari esiri n’oku saa ya ahu.Nke a ga-eme ka ahu juo ya oyi ngwa ngwa. Biko ejila mmiri oyi saa nwa ohuru ahu ma obu nye ya ka onuo, nkea puru ime ka oyi tuo ya.",
        "Nye ya ihe onunu ndi ozo, iji mee ka ahu ya juo oyi site n’ime.",
      ],
      img: [require("../../assets/images/baby/Baby2.jpg")],
      vid: ["https://www.youtube.com/watch?v=HsRBsNp_cNw"],
    },
    {
      question: "Gini mere afo ji egbu umuaka ngbu?",
      ans:
        "Ihe n’akpata afo igbu nwa ohuru ngbu bu iri oke nri ma o bu obere nri, ikuku ibanye n’ “Intestine” ha, ma o bu oria n’efe efe. Ngwa ngwaa ichoputara nka, gaa hu dokita. Afo ngbu oge nile puru ibu n’ihi ejeghi mpochi nke oma, oria kolon ma o bu oria uzari mmamiri.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby3.jpg")],
      vid: null,
    },
    {
      question: "Gini mere umuaka ji enwe ahu oku mgbe ha n’amalite ipu eze?",
      ans:
        "Ahu erughi ala na ahu oku bu ihe ana-ahukari mgbe nwa ohuru n’amalite ipuputa eze. Oburu n’ otutu iju oyi n’ikpo oku ahu akaria 1010C digri Celsius, nkea n’egosi n’obu oria nje kpatara ya kama ibu ipu eze. Biko, gaa hu dokita gi.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby4.jpg")],
      vid: null,
    },
    {
      question: "Gini mere umuaka ji ehi ura karia otu okwesiri?",
      ans:
        "Umuaka n’ehi ura nke ukwu ka ha nwe ike ito nke oma. Ha n’ehi ura nke ukwu n’isi ututu na mgbede. Ka nwa ohuru n’ehi ura nke oma, ka o na-eto n’ike n’ike.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby5.jpg")],
      vid: null,
    },
    {
      question: "Ole nri ekwesiri inye nwa n’aju ara?",
      ans:
        "Amanyela nwa n’ aju ara iri nri ohuru ozugbo, n’ihi na mmiri ara amaralaya ahu nke ukwu. Jiri ntakiri ntakiri n’enye ya nri ohuru. Nye ya otu udi nri ubochi ato (3-4) rue ano, tupu I gbanwe gaa n’nke ozo. Etinyela ihe oto biri-biri otu mgbe ahu. Dika ihe atu, o buru n’ina-enye nwa gi akamu, kweka ubochi ato ma o bu ano gafee tupu ibido tinyewe milk. Nogide n’enye nwa gi mmiri ara rue mgbe o ruru otu afo ma o bu kari.",
      ansOpt: [
        "Akamu – akamu eji oka, oka guinea, millet ma obu soya beans di nma nke ukwu. Gbee ya ka o di nfe onunu.",
        "Akwukwo nri na utara – ofe akwukwo ugu, oha, waterleaf, na okazi di nnoo mma ma ejiri udara ji, ede akpu na pitato butue ya. Akwukwo nri ndi ozo dika carrot na tomato di nma ma esie ha nke oma.",
        "Nkpuru osisi – Nye nwa n’aju ara oroma une, ube utu ocha, apple, popo, mangolo. Gwakota ha iji mee ihe ominu di uto. Biko, etinyela ihe oto biri-biri ozo.",
        "Agwaa: Sachapu nkpo agwaa ma sie ya nke oma. Tinye obere ose na nnu iji mee ka odi uto. Nye nwa gi moi-moi ma o bu akara.",
        "Nri n’kpuru: Nri dika osikapa, oka wheat na millet di nma inye nwa n’aju ara ohuru.",
        "Jisie ike sie ha nke oma. Nri ndia kwesiri ide nke oma.",
        "Nri olulo: Amala na ewedu n’aga nnoo were-were n’ onu nye umuaka Yoruba. Ekwesiri iji ayiya siere ha ofe ewedu iji mee ka o too uto. Ka nwata n’etolite bido nyewe ya eba, semo, na utara ji na azu. Nri umuaka ekwesighi isi ike.",
        "Anu na akwa:Nye nwa n’aju ara anu esidere eside, akwa okuko, mmiri ara ehi, azu, anu okuko na ihe onunu yogurt.",
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
      question:
        "Ekwesirim inye nwatakiri mmiri onunu mgbe o di nani onwa abuo?",
      ans:
        "Mbanu, ekwesiri inye nwatakiri mmiri mgbe odi onwa isii (6months). Nka bu ihe anyi na-akpo iji nani mmiri ara nne azu nwa ohuru. Mmiri ara nne nwere mmiri onunu zuru ezu maka nwatakiri. Nye nwa ohuru ara obunadi mgbe ututuru n’akpo ya. Mmiri ara ga-echebe nwata puo n’oria di iche iche. Mgbe nwata di onwa isii, I nwere ike nyezie ya mmiri onunu, anu akwa, dgz.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby7.jpg")],
      vid: null,
    },
    {
      question: "Gini na-akpata-onyunyu-onyunyu mgbe nwata na-epu eze?",
      ans:
        "TIpu eze anaghi akpata onyunyu –onyunyu. Umuaka n’etinyekari aka ha n’onu. Ha n’etinyekwa ihe obula ha meturu aka n’onu. Ha n’ eme nka n’ihi na anyi n’eri ha oko. Nje ndi n’eso ihe ndi ahu ha n’etinye n’onu. Nje ndi n’aba zi ha n’ afo ma kpatara ha onyunyu-onyunyu.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby8.jpg")],
      vid: null,
    },
    {
      question: "Gini na-akpatara umuaka ume nkuchi?",
      ans:
        "Ume nkuchi na-akpata mmeru ahu na onwu umuaka. Ohere iku ume umuaka na-adikari nfe ikuchi. Ona ewe ogologo oge umuaka imuta itari na iloda nri nke oma Odichaghi mfe umuaka ikwacha akpiri ma obu mee unara iji wepu ihe mgbochi obula di n’ ohere iku ume ha. Mgbe ume n’ekuchi nwata, choputa ihe kpatara ya.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby9.jpg")],
      vid: null,
    },
    {
      question: "Gini na-akpata imu nwa nwere nkwaru?",
      ans: "Otutu ihe puru ikpata imu nwa nwere nkwaru, ha gunyere ndi a:-",
      ansOpt: [
        "Erighi nri n’edozi ahu mgbe nwanyi di ime.",
        "Uko ayodine n’nri nwanyi di ime n’ eri.",
        "Enweghi ihe ndi n’edozi okpukpu tupu nwanyi adi ime",
        "Ebumputa uwa. Nwa ohuru nwere ike iketa ihe ufodu site n’aka nne na nna, nke ga-eme ka o nwee nkwaru.",
        "Ihe ndi metutara ebe obibi- onye nne puru iji ogwu ike, utaba, ma o bu mmanya n’aba n’anya n’eme ihe. O pukwara iria oria kpashikpasi. Ihe ndia puru ime ka nwa ebu na afo nwee nkwaru",
        "Onye nne igba karia afo iri ato na ise (35yrs)",
        "Inu otutu ogwu mgbe adi ime.",
        "Inwe nsogbu imuputa nwa.",
      ],
      img: [require("../../assets/images/baby/Baby10.jpg")],
      vid: null,
    },
    {
      question: "Gini na-akpata ahu na Anya nwa ohuru icha odo-odo (Jaundice)?",
      ans:
        "Ahu na anya nwa ohuru icha odo-odo abuchaghi oria n’onwe ya, kama o bu ihe ama n’ihe adichaghi mma n’ahu nwa ohuru. Ihe na-akpata ya bu mbibi nke obara uhie n’ahu nwata ebe umeji n’ enwekwaghi ike ibuso ihe ahu agha. Ana- ahukar iya n’ebe umu amuru n’erugbi eru no na umu ohuru.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby11.jpg")],
      vid: null,
    },
    {
      question: "Ilekota Ali nwa Ohuru",
      ans:
        "Were owu mesa n’ mmiri mmuo ma hichaa ali nwa ohuru otutu ugboro kwa ubochi. I puru ihichaa ya mgbe o bula I wepuru ibanti ya. Kpachapuru ukwu ali anya nke oma ya bu ebe jikotara ya na afo. Kwe ka ikuku n’efesa ali, ka o wee kpoo ma o bu daa ngwa ngwa. Ekwela ka ibanti n’emetu ali. Nye ali ohere ka o jiri aka ya daa, adopula ya n’ike. Zere iji kerozini, powda n’ekpo oku n’eme ka ali wee daa n’ike. Enyela onwe gi nsogbu ma o buru n’ali adaghi tupu ubochi nke asaa, naani n’echicha ya mgbe mgbe, o ga-ada mgbe o kwesiri ida.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby12.jpg")],
      vid: [
        "https://www.nhs.uk/video/Pages/how-do-i-take-care-of-the-umbilical-cord-stump.aspx?searchtype=&searchterm=&offset=17&",
      ],
    },
    {
      question: "Ole Otu nwa ebu na afo si eri nri?",
      ans:
        "Nwa ohuru n’amiri nri site n’udo jikotara ya na nne ya ana-akpo palasenta. Mgbe nne risiri nri, nri ahu ga-egweri ma banye n’ime obara. Nwa ohuru ga-amiri nke ya sile n’ palasenta. Palasenta n’azachapu nje na umu ahuhu irute nwa ebu na afo aka.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby13.jpg")],
      vid: null,
    },
    {
      question: "Otu I puru isi lekota nwa ohuru",
      ans:
        "Gbaa nbo hu na gi na nwa gi na-adi ocha. Kuru nwa gi nke oma. Anagharila nwa gi n ike. Ejila nwa gi egwuri egwu ojo. Kwee ka aru gi metu aru nwa gi. Soro nwa n’ekwurita okwu mgbe niile. Gbanwee ibanti nwa gi mgbe o bula oruru unyi. Nye nwa gi nri mgbe agu guru ya. Ikwesiri inye ya nani mmiri ara rue onwa isii. Jiri mmiri oku sacha efere, ngaji na ihe ndi ozo nwa gi ji eri nri. Kpachapuru ali nwa gi anya site n’iji ude mmuo na owu hichaa ya. Saa nwa ahu ma hicha ihe ndina ya. Zaa ulo gi na ulo nwa gi kwa ubochi. Nyibe nwa gi akwa na-adabere n’ otu ihu etu-igwe di. Mgbe nwa gi n ebe akwa, biko guguo ya. Ahapula nani nwa gi n’ulo. Kpoturu dokita mgbe o bula nwa gi n’ejighi ike. Gbaa nwa gi ogwu ngboohi n’ulo ogwu ahu-ike di nso.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby14.jpg")],
      vid: null,
    },
    {
      question: "Ipu Eze",
      ans:
        "Ipu eze bu mgbe nwa ohuru n epuputa eze, nke a bu akuku nke uto nwa gi. Ipu eze nwere ike ikpata ahu ngbu, ahu oku n ahu erughi ala, nke puru iweta ngbakasi ahu nye nwa ohuru na ndi nne na nna. Afo osisa esoghi na ihe n’egosi na nwata amalitela ipu eze kama o na- egosi na nwata ahu ebutela nje n ime afo ya. Otu a puru isi belata ahu ngbu nke ipu eze: ",
      ansOpt: [
        "Jiri nkpisi aka gi saa onu nwa gi, n emetu anyi ya aka. Nke a ga-ebelatatu ihe ngbu.",
        "Mee ka onu nwa gi juo oyi site n’itinye ihe juru oyi n’onu ya.",
        "Nye ya ihe umuaka n’epu eze ohuru ji egwuri egwu. O ga-eji ihe ndi ahu n’amu eze ya mgbe eze koro ya oko.",
        "Nye ya ogwu eji agwo ahu ngbu. Enyela ya ogwu obula dokita n’agwaghi gi.",
      ],
      img: [require("../../assets/images/baby/Baby15.jpg")],
      vid: [
        "https://www.youtube.com/watch?v=PaTji1kwFDU",
        "https://www.parents.com/baby/health/baby-teeth/baby-teething-timeline",
      ],
    },
    {
      question: "Gini na-akpatara nwata oyi?",
      ans:
        "Ihe na-egosi nwata nwere oyi bu oke uzere, azuzu na enweghi ike iku ume nke oma. Mgbe ufodu, a puru inwe akpiri ngbapia, ukwara na ahu oku. N’ikwu ezi okwu, umuaka n’enwekari oyi na ukwara n’ihi na ime ahu ha esibeghi ike. Ikunye nwa ohuru umuaka ndi ozo puru ime ka ha nwee oyi. Ozo o buru n’ ekpuchighi ukwu na isi nwa ohuru nke oma, o puru inwe oyi ngwa ngwa. iji gbochie oyi nyibe nwa ohuru akwa kwesiri ekwesi mgbe o bula.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby16.jpg")],
      vid: null,
    },
    {
      question: "Otu esi agwo oyi umuaka?",
      ans:
        "N’ eziokwu, enwebeghi uzo dooro anya esi agwo oyi umuaka ma I puru inyere ha aka igbake ngwa ngwa. Ekwesiri inye ha ogwu ahu ngbu n’adabee n’afo ndu ha dika onye dokita si tuzie aka. Biko enyela umu ohuru na Umuaka asipirini. Ma I puru ime ihe ndia:- ",
      ansOpt: [
        "Mee ka ulo ebe nwa ahu n’ehi ura nwe ekpomoku di nma.",
        "Ekwela ka anuru oku kusaa nwa ahu.",
        "Hichaa imi ya nke oma.",
        "Mee ka nwa gi hie ura nke oma n’abali.",
        "O buru n’nwa ehighi ura, mado ya n’afo gi ka o wee kute ume nke oma.",
        "Biko nye nwa gi nani mmiri ara zuru ezu rue mgbe o ruru onwa isii.",
        "Mgbe onwa isii gasiri I puru inye ya nkpuru osisi ozo nwere vitamin C.",
      ],
      img: [require("../../assets/images/baby/Baby17.jpg")],
      vid: null,
    },
    {
      question: "Olee mgbe m kwesiri ikpoturu dokita maka ahuike nwa m?",
      ans:
        "Kpoturu dokita mgbe nwa n’erubeghi onwu ato nwere oyi. Udi oyi a puru igosi n’enwere ihe ize ndu dinu. Kpoo dokita ma o bu gaa ulo ogwu mgbe.",
      ansOpt: [
        "Mgbe nwata n’akwa oke ukwara.",
        "Mgbe ahu nwa g di oku.",
        "Mgbe ihe ama ndi ahu n’akwusighi rue ubochi iri.",
        "Mgbe nti n’egbu nwata ngbu. Nwa ahu ga-na-ado aka na nti ya.",
        "Mgbe nwa gi n enweghi ike iku ume nke oma.",
        "Mgbe imi ona-ezipu di okputukpu ma n’acha akwukwo ndu-akwukwo ndu.",
        "Mgbe ike na-agwukari nwa gi.",
      ],
      img: [require("../../assets/images/baby/Baby18.jpg")],
      vid: null,
    },
    {
      question: "Ogwu Ngbochi Oria",
      ans:
        "Ana-agba ogwu ngbochi oria iji belata mmuba nje na oria di iche iche. O ka mma igba ogwu ngbochi karia inu-ogwu maka nje na oria. Ufodu mmadu na-ako akuko n’atu egwu banyere igba ogwu ngbochi, nke a emekwala ka otutu ndi nne na nna juu igba umu ha ogwu ngbochi. Nke a emekwala ka umu ha bute oria kpirikite, oria nkwaru na oria ndi ozo a puru iji ogwu ngbochi gbochie ha. Hu na igbara umu gi ogwu ngbochi ana-agba kwa-mgbe kwa-mgbe na nke ana-agba ngwa ngwa nwanyi musiri nwa. Ogwu ngbochi n’eme ka umuaka gbasie ike, chekwara gi ego, ma mee ka 1 gbara ichegbu onwe gi banyere oria.",
      ansOpt: null,
      img: [require("../../assets/images/baby/Baby19.jpg")],
      vid: null,
    },
    {
      question: "Uru mmiri ara baara umuaka",
      ans: "Mmiri ara baara umuaka otutu uru. Ha gunyere ndi a:-",
      ansOpt: [
        "Mmiri ara n’eme ka umuaka too nke oma ma gbasie ike.",
        "Mmiri ara bu nri kasi edozi umuaka ahu.",
        "Mmiri ara nwere ihe zuru ezu umuaka choro maka uto mgbe obula.",
        "Umuaka enyere nani mmiri ara rue onwa isii anaghi ariakabe ahu.",
        "Umu aka enyere nani mmri ara anaghi enwekebe afo oziza, anyughi nsi nke oma na afo osisa.",
        "Mmiri ara mwere ihe niile nwa gi choro iji too nke oma dika vitamin protin na fati",
        "Mmiri ara n’ egweri ngwa ngwa n’ime afo",
        "Mmiri ara di nnoo ocha, onaghi ebute nje ka mmiri ara ehi.",
        "Mmiri ara n’egbochi oria ukwara ume-oso na oria ndi ozo",
        "Mmiri ara n’ebelata ihe ize ndu nke oria mmamiri, okeibu na udi oria kansa ndi ozo.",
        "Mmiri ara n’eme ka umuaka ghara ibu oke ibu",
        "Mmiri ara n’eme ka nne na nwa noro nso mgbe niile.",
      ],
      img: [require("../../assets/images/baby/Baby20.jpg")],
      vid: null,
    },
  ],
};

export default data;
