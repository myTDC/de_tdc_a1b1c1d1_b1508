import React from 'react';
import Card from '@material-ui/core/Card';
//import Pbar from '../ProgressBar';
import LeftContent from '../DashCardLeft';

const styles = ({
    parent :{
        position: 'relative',
        width:'100%',
        margin: 0,
        padding: '4px',
    },
    row: {
        display: 'flex',
        width: '100%',
        height: 250,
        alignItems: 'flex-start',
        padding: 8,
        flexWrap: 'wrap',
        backgroundColor: '#FFF8E7',
        boxShadow: '3px 3px 4px #E0E0E0',
    },
    /* progressBar: {
        position: 'absolute',
        bottom: '50px',
        minHeight: '10px',
        width: {width},
        right: '0',
        transform: 'rotate(90deg)',
        background: 'linear-gradient(90deg, red, yellow, green)',
        zIndex: '100',
    }, */
    columnRight: {
        flex: 1,
        width: '79%',
        height: '100%',
        marginTop: 24,
        marginLeft: 8,
        overflow: 'scroll',
        padding: 0,
    },
    todoitem: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '87%',
        height: '19%',
        padding: 0,
        marginLeft: 20,
        marginBottom: 12,
        marginRight: 4,
        borderRadius: '20vh',
        background: '#F9F9F9',
        boxShadow: '1px 1px 3px rgba(0,0,0,16%)'
    },
    todotext: {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '20px',
        fontWeight: '500',
        color: '#4e4e4e',
        marginTop:5,
        marginRight:0,
        marginLeft:18,
        padding: 0,
    },

    AdatesText: {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '13px',
        fontWeight: '500',
        color: '#4e4e4e',
        marginTop:2,
        marginRight:18,
        padding: 0,
    },

    CdatesText: {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '13px',
        fontWeight: '700',
        color: '#4e4e4e',
        marginTop: 0,
        marginRight:18,
        lineHeight: 0.5,
        padding: 0,
    },
});

const UserTodo = (props) => {
    return(
        <div style={styles.parent}>
            {props.children}
            
                <div style={styles.row}>
                <LeftContent header= {props.header} stat={props.stat} footer={props.footer}/>
                    <div style={styles.columnRight}>
                        <div style={styles.todoitem}>
                            <h4 style={styles.todotext}> asaddaf sdfsd sdafs dfs df abcc </h4>
                            <h4 style={styles.AdatesText}> abccsaddsfsd <h4 style={styles.CdatesText}> abcc </h4> </h4>
                        </div>
                    </div>
                </div>
           
        </div>
    );
};

export default UserTodo;
/* <div id="categories" styles={styles.row}>
                    <LeftContent header= {props.header} stat={props.stat} footer={props.footer}/>
                    <div style={styles.columnRight}>
                        <div>
                            <ul style={styles.todolist}>
                            <li><div style={styles.todoitem}>
                                <h4 style={styles.todotext}>last read</h4>
                                <span style={styles.dates}><h4 style={styles.datesText}>13th July '18</h4> 
                                <h4 style={styles.datesText}><b>Today</b></h4></span>
                            </div></li>
                            <li><div style={styles.todoitem}>
                                <h4 style={styles.todotext}>01 Do something productive</h4>
                                <span style={styles.dates}><h4 style={styles.datesText}>13th July '18</h4> 
                                <h4 style={styles.datesText}><b>Today</b></h4></span>
                            </div></li>
                            <li><div style={styles.todoitem}>
                                <h4 style={styles.todotext}>01 Do something productive</h4>
                                <span style={styles.dates}><h4 style={styles.datesText}>13th July '18</h4> 
                                <h4 style={styles.datesText}><b>Today</b></h4></span>
                            </div></li>
                            <li><div style={styles.todoitem}>
                                <h4 style={styles.todotext}>01 Do something productive</h4>
                                <span style={styles.dates}><h4 style={styles.datesText}>13th July '18</h4> 
                                <h4 style={styles.datesText}><b>Today</b></h4></span>
                            </div></li>
                            <li><div style={styles.todoitem}>
                                <h4 style={styles.todotext}>01 Do something productive</h4>
                                <span style={styles.dates}><h4 style={styles.datesText}>13th July '18</h4> 
                                <h4 style={styles.datesText}><b>Today</b></h4></span>
                            </div></li>
                            </ul>  
                        </div>
                    </div>
                </div> */