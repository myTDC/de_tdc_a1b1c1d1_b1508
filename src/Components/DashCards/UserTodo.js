import React from 'react';
import Card from '@material-ui/core/Card';
//import Pbar from '../ProgressBar';
import LeftContent from '../DashCardLeft';

const styles = ({
    card: {
        minHeight: '30vh',
        position: 'relative',
        margin: '4px',
        boxShadow: '3px 3px 4px #E0E0E0',
    },
    parent :{
        position: 'relative',
        width:'100%',
        margin: 0,
        padding: '4px',
    },
    row: {
        position:'relative',
        minHeight: '28vh',
        minWidth: '100%',
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
        position: 'absolute',
        right: 0,
        minHeight: '100%',
        minWidth: '73%',
        backgroundColor : '#F2F2F2',
    },
    todolist: {
        listStyleType: 'none',
        padding: '0',
        marginTop: '5%',
        maxHeight:'21vh',
        maxWidth: '100%',
        overflow: 'scroll',
    },
    todoitem: {
        maxWidth: '87%',
        margin: '1.5%',
        paddingLeft: '14px',
        paddingTop: '0px',
        paddingBottom: '0px',
        backgroundColor: '#fff',
        borderRadius: '20px',
    },
    todotext: {
        display: 'inline-block',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '17px',
        fontWeight: '500',
        color: '#4e4e4e',
        marginTop:0,
        marginRight:0,
        marginLeft:0,
        marginBottom: '2px',
        padding: 0,
    },
    dates: {
        display: 'inline-block',
        marginLeft: '18%',
        marginTop: '2px',
        padding:0,
        color: '#4E4E4E',
    },
    datesText: {
        fontSize: '8pt',
        fontFamily: 'Raleway, sans-serif',
        lineHeight: '10pt',
        padding: 0,
        margin:0,
        textAlign: 'right',
    },
});

const UserTodo = (props) => {
    return(
        <div style={styles.parent}>
            {props.children}
            <Card style={styles.card}>
                <div id="categories" styles={styles.row}>
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
                </div>
            </Card>
        </div>
    );
};

export default UserTodo;