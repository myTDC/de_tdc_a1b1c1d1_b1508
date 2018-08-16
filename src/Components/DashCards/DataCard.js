import React from 'react';
//import Charter from '../Charter';

//Components - Stateless
import ToDo from '../ListItems/ToDo';

//Assets
import org_logo from '../../logo_min.svg';

const DataCard = (props) => {

    //icons to be used to define the origin of the todo. icon types: Organization: 'grey TDC plane'/User: 'user avatar'/Sponsored: '$ sign'/Notification: 'Bell icon'
    // const todos = [{ 'id':'xys123', 'priority':10, 'title':'Continue Where you left off', 'url':'https:dash.mytdc.io/', 'added' : '3 days ago', 'end_date': new Date(new Date().getTime() + 24*3600*3), 'icon':'icon_org'},
    //     {'id':'xys001', 'priority':7, 'title':"Test your skills at TDC Elevate '18", 'url':'https:dash.mytdc.io/participate', 'added' : '15th July 2018', 'end_date': '30th September 2018', 'icon':'icon_org'},
    //     {'id':'xys123', 'priority':5, 'title':'Extend a social connection with Team TDC', 'url':'https:dash.mytdc.io/participate/user', 'added' : '3 days ago', 'end_date': new Date(new Date().getTime() + 24*3600*3), 'icon':'icon_org'},
    //     {'id':'xys123', 'priority':10, 'title':'Continue Where you left off', 'url':'https:dash.mytdc.io/', 'added' : '3 days ago', 'end_date': new Date(new Date().getTime() + 24*3600*3), 'icon':'icon_org'},
    //     {'id':'xys123', 'priority':10, 'title':'Continue Where you left off', 'url':'https:dash.mytdc.io/', 'added' : '3 days ago', 'end_date': new Date(new Date().getTime() + 24*3600*3), 'icon':'icon_org'},
    // ];


    //let lister = null;

    let todolister = (<div className="todo_Container">
        <div className="todo_overview"><strong>12</strong></div>
        <div className="todo_list">
            <ToDo id="01" title="Continue Where you left off" url="https:dash.mytdc.io/" logo={org_logo} added="3 days ago" enddate={new Date(new Date().getTime() + 24*3600*3)}/>
        </div>
        </div>);
    

    return(
    <div className="Card">
        {todolister}
    </div>
    );
};

export default DataCard;