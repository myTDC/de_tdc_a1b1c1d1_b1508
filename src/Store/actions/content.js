import * as actionType from './actionTypes';
import {    articlesRef_3P//, 
            // profileRef, 
            // usrTodoRef 
} from '../config/fb';

let cVer = "b1008";
/*let artInit = [
    {"ver": cVer, "id": 1, "title": "10 Resources to Help You Grow a Lean Startup", "url": "https://blog.producthunt.com/10-resources-to-help-you-grow-a-lean-startup-aad02b2354c" ,"image": "https://cdn-images-1.medium.com/max/2000/1*BXkkZ9d5IasXYsFZendl3Q.jpeg", "category": "Best Practices", "length": "7 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 2, "title": "The psychology of selling", "url": "https://medium.com/swlh/the-psychology-of-selling-1bfea4cd127" ,"image": "https://cdn-images-1.medium.com/max/2000/1*1B7PMGNM-V9h_9BODEIupw.jpeg", "category": "Best Practices", "length": "10 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 3, "title": "Brand Promise Meets Brand Experience", "url": "https://medium.com/swlh/brand-promise-meets-brand-experience-70dc6ef468cd" ,"image": "https://cdn-images-1.medium.com/max/1800/1*_uKljz8YGvy59Jt5BiVsYg.jpeg", "category": "Best Practices", "length": "4 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 4, "title": "Essential Tips That Will Help You Raise Cash & Grow Your Startup", "url": "https://medium.com/swlh/essential-tips-that-will-help-you-raise-cash-grow-your-startup-3b3a372a0764" ,"image": "https://cdn-images-1.medium.com/max/2000/0*wQ9KsK3qD0iaF8dp.", "category": "Best Practices", "length": "6 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 5, "title": "How does an early-stage investor value a startup?", "url": "https://seedcamp.com/resources/how-does-an-early-stage-investor-value-a-startup/" ,"image": "https://seedcamp.com/wp-content/themes/seedcamp/img/seedcamp-logo.png", "category": "Investment", "length": "7 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 6, "title": "How to value your startup in 38 easy steps", "url": "https://hackernoon.com/how-to-value-your-startup-when-raising-series-seed-equity-4ddaf1e5c716" ,"image": "https://cdn-images-1.medium.com/max/1600/0*9EaxPZZgVXvEoysl.jpg", "category": "Investment", "length": "8 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 7, "title": "How To Value Your Startup", "url": "https://medium.com/startup-grind/how-to-value-your-startup-dcedb03c0e82" ,"image": "https://cdn-images-1.medium.com/max/2000/1*T6RBIvTZ-xhdLED00HTK3g.png", "category": "Investment", "length": "8 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 8, "title": "Entrepreneur seeking an investment? Here’s a survival guide", "url": "https://www.techinasia.com/an-entrepreneur-seeking-an-investment-heres-a-survival-guide" ,"image": "https://cdn.techinasia.com/wp-content/uploads/2012/01/smiley-face.jpg", "category": "Investment", "length": "4 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 9, "title": "What I wish I knew about fundraising as a first-time founder", "url": "https://medium.com/@preethikasireddy/what-i-wish-i-knew-about-fundraising-as-a-first-time-founder-243644968567" ,"image": "https://cdn-images-1.medium.com/max/1800/0*U4utwJYrJfJuiNDl.jpg", "category": "Investment", "length": "21 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 10, "title": "The UX behind designing landing pages that convert", "url": "https://uxplanet.org/the-ux-behind-designing-landing-pages-that-convert-b302ef745c74" ,"image": "https://cdn-images-1.medium.com/max/2000/1*YMYhEqOoo_HhhqmLqV4Z6Q.png", "category": "Design", "length": "7 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 11, "title": "Animation in UI Design: From Concept to Reality", "url": "https://uxplanet.org/animation-in-ui-design-from-concept-to-reality-85c49907b19d" ,"image": "https://cdn-images-1.medium.com/max/2000/1*6s5kH1I2TfEnuepTKqNI6Q.jpeg", "category": "Design", "length": "5 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 12, "title": "How To Make The Decisions That Shape Your Life", "url": "https://medium.com/swlh/how-to-make-the-decisions-that-shape-your-life-9de24b3d0d97" ,"image": "https://cdn-images-1.medium.com/max/2000/0*_0J8en1bIHq-e_pw.", "category": "Motivation", "length": "7 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 13, "title": "How the Bootstrap 4 Grid Works", "url": "https://uxplanet.org/how-the-bootstrap-4-grid-works-a1b04703a3b7" ,"image": "https://cdn-images-1.medium.com/max/2000/1*eTNDIrwYtnDm1NEktaV5tQ.png", "category": "Develop", "length": "11 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 14, "title": "Steve Jobs Definitive Guide to PR & Marketing for Early-Stage Startups and Entrepreneurs", "url": "https://medium.com/@pressfarm/steve-jobs-definitive-guide-to-pr-marketing-for-early-stage-startups-and-entrepreneurs-f4070306ab04" ,"image": "https://cdn-images-1.medium.com/max/1800/1*7ESY5cFZO98t75p7vH7oYQ.jpeg", "category": "Best Practices", "length": "12 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 15, "title": "UCD vs UX: What’s the difference?", "url": "https://uxplanet.org/ucd-vs-ux-whats-the-difference-255443efa5f" ,"image": "https://cdn-images-1.medium.com/max/1800/0*uq46dxo2FWrYk6M9.png", "category": "Design", "length": "7 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 16, "title": "The best website and app user experiences according to the experts", "url": "https://uxplanet.org/the-best-website-and-app-user-experiences-according-to-the-experts-1a3776751ba7" ,"image": "https://cdn-images-1.medium.com/max/1800/0*A8ndnBf6PAjd91NO.png", "category": "Design", "length": "6 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 17, "title": "16 Rules of Effective UX Writing", "url": "https://uxplanet.org/16-rules-of-effective-ux-writing-2a20cf85fdbf" ,"image": "https://cdn-images-1.medium.com/max/1800/1*f6WUDTvOB87aQQkyKbrkqA.jpeg", "category": "Best Practices", "length": "6 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 18, "title": "How To Make Your Product Stand Out With Your Pitch", "url": "https://medium.com/rich-text/how-to-make-your-product-stand-out-with-your-pitch-f19c60b355e3" ,"image": "https://cdn-images-1.medium.com/max/1800/1*bLQ43HLQRp1r6KGs2G7PsA.jpeg", "category": "Best Practices", "length": "3 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 19, "title": "7 Insanely Creative Business Plan Templates", "url": "https://medium.com/swlh/7-insanely-creative-business-plan-templates-a78150071b82" ,"image": "https://cdn-images-1.medium.com/max/1800/1*_cSPmJRR4MGssDgyFrIMEg.jpeg", "category": "Best Practices", "length": "", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 20, "title": "How to build your personal brand as a new developer", "url": "https://medium.freecodecamp.org/building-your-personal-brand-as-a-new-web-developer-f6d4150fd217" ,"image": "https://cdn-images-1.medium.com/max/2000/1*Cop5aRs4EB-DTOe9QYuALA.jpeg", "category": "Develop", "length": "7 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 21, "title": "Your Company Culture is Who You Hire, Fire, and Promote", "url": "https://medium.com/s/company-culture/your-companys-culture-is-who-you-hire-fire-and-promote-c69f84902983" ,"image": "https://cdn-images-1.medium.com/fit/c/315/419/1*9tOakgkxzdZBDDGds4sKww@2x.png", "category": "Leadership", "length": "11 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 22, "title": "8 Typography Tips For Designers: How to Make Fonts Speak.", "url": "https://uxplanet.org/8-typography-tips-for-designers-how-to-make-fonts-speak-84741a4053c8" ,"image": "https://cdn-images-1.medium.com/max/2000/1*edslahCOB_tr1u-wC5Jmtg.jpeg", "category": "Design", "length": "7 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 23, "title": "20 Biggest Reasons Startups End Up Failing, According to This Infographic", "url": "https://medium.com/marketing-and-entrepreneurship/20-biggest-reasons-startups-end-up-failing-according-to-this-infographic-dc9110c8cf33" ,"image": "https://cdn-images-1.medium.com/max/1800/1*_ErYk4-o2YRUo6Y-vyIkzw.png", "category": "Best Practices", "length": "3 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 24, "title": "50 Innovation and Success Quotes from SpaceX Founder Elon Musk", "url": "https://medium.com/the-mission/50-innovation-and-success-quotes-from-spacex-founder-elon-musk-13f217d362aa" ,"image": "https://cdn-images-1.medium.com/max/1800/1*ICw_9vy9cOYDovGy8qUASQ.png", "category": "Motivation", "length": "8 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 25, "title": "Everything your startup needs to know about SEO", "url": "https://thinkgrowth.org/everything-your-startup-needs-to-know-about-seo-4b3267c5551f" ,"image": "https://cdn-images-1.medium.com/max/1600/1*XqWdxD5Tc1I3CVEF6VDcpg.jpeg", "category": "Best Practices", "length": "2 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 26, "title": "Simon Sinek: Definitive Guide to PR and Marketing For Founders and Entrepreneurs", "url": "https://medium.com/@pressfarm/simon-sinek-definitive-guide-to-pr-and-marketing-for-founders-and-entrepreneurs-pressfarm-d9127630b494" ,"image": "https://cdn-images-1.medium.com/max/2000/1*S6b9hjLxvC-vFI3vL7NgyQ.jpeg", "category": "Best Practices", "length": "13 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 27, "title": "Here is Uber’s first pitch deck", "url": "https://techcrunch.com/gallery/here-is-ubers-first-pitch-deck/slide/1/" ,"image": "https://techcrunch.com/wp-content/uploads/2017/08/uber-11.png?w=700&crop=1", "category": "Investment", "length": "12 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 28, "title": "Sustainable Product Growth", "url": "https://medium.com/swlh/sustainable-product-growth-541fa786df01" ,"image": "https://cdn-images-1.medium.com/max/1800/1*G65Q7_OyL_-UvtzV0hVpAA.jpeg", "category": "Investment", "length": "12 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 29, "title": "These 5 Brilliant TED Talks Will Teach You How to Be a Great Leader", "url": "https://medium.com/swlh/these-5-brilliant-ted-talks-will-teach-you-how-to-be-a-great-leader-17a097fa6b97" ,"image": "https://cdn-images-1.medium.com/max/1800/1*RM9CuG8VSiBsTM6DUWFnvA.jpeg", "category": "Leadership", "length": "4 Mins", "read": 0, "author": null, "publisher": null},
    {"ver": cVer, "id": 30, "title": "What To Expect From 3 Types Of Early Stage Investors", "url": "https://entrepreneurshandbook.co/what-to-expect-from-3-types-of-early-stage-investors-214e970690e7" ,"image": "https://cdn-images-1.medium.com/max/2000/1*IMvODwVovmnwcpdjeNoUhg.jpeg", "category": "Investment", "length": "6 Mins", "read": 0, "author": null, "publisher": null}
];
*/
let artStored = [
    {"ver": cVer, 
    "id": 31, 
    "title": "How We Decided To Split Equity As Co-Founders", 
    "url": "https://entrepreneurshandbook.co/how-we-decided-to-split-equity-as-co-founders-of-digital-press-cffd464232dd",
    "image": "https://cdn-images-1.medium.com/max/2000/1*9yqQX9xPZ95KisyOlHkWGQ.jpeg", 
    "category": "Best Practices", 
    "length": "4 Mins", 
    "read": 0, 
    "author": "Nicolas Cole", 
    "publisher": "Medium/Entrepreneur's Handbook"},
];

export const logArtList = () => {
    //console.log('[Act/Content] [logArtList] -> Articles to be Written to FB:\n', ...artStored);
    return{type: null};
}

export const writeToFB = () => {
    try{
        const newArticlesSetRef = articlesRef_3P.push();
        newArticlesSetRef.set({ ...artStored });
        console.log('[Act/Content] [writeToFB] -> Articles Written to FB:\n', ...artStored);
        return{type: actionType.CONT_COMMIT_ARTICLES};
    }catch(err){
        console.log('[Act/Content] [writeToFB] -> Write to FB Failed with Error:', err);
        return{type: null};
    }
};

export const readfromFB = () => {

    let arts = [];
    return async dispatch => {
        try {
            articlesRef_3P.once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    let childKey = childSnapshot.key;
                    let childData = childSnapshot.val();
                    //console.log('[Act/Content] [readFromFB] -> Data Key: ',childKey, 'Data Value: ', childData);
                    arts.push(...childData);
                });
            }).then(() => dispatch(readSuccess(arts)));
            //return arts;
            //dispatch(readSuccess(arts));
            
        } catch(err){
            dispatch(readFailure(err));
            // return null;
        }
        //dispatch(readSuccess(...arts))
}};

export const readSuccess = (result) => {
    //let list= {result};
    
    //console.log('[Act/Content] [readSuccess] -> Read from FB Successful:', result );
    return { 
            type: actionType.CONT_FETCH_ARTICLES, 
            val: result
        };
};

// export const reader = () => {
//     //let list= {result};
//     return async dispatch =>{
//         const result = dispatch(readfromFB()).then(console.log('[Act/Content] [reader] -> Read from FB Successful:', result ));
        
//         return{type: null};
//     }
    
// }

const readFailure = (error) => {
    console.log('[Act/Content] [readFailure] -> Read from FB Failed with Error:', error);
    return{type: null};
}

// const listenToFB = () => {
    
// };