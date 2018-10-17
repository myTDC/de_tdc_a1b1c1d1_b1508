import React from 'react';
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
        maxHeight: '80%',
        marginTop: 24,
        marginBottom: 24,
        marginLeft: 8,
        overflow: 'scroll',
        padding: 0,
    },
    todoitem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        fontSize: '1.2rem',
        fontWeight: '500',
        color: '#4e4e4e',
        maxWidth: '70%',
        marginTop: 5,
        marginRight: 0,
        marginLeft: 18,
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
        lineHeight: 0.3,
        padding: 0,
    },
});

const UserTodo = (props) => {
    const datify=(time)=> {
        const dateObj = new Date(time);
        //let timeNowOld = 
        return dateObj.getDate() + "/" + dateObj.getMonth() + "/" + dateObj.getFullYear();
    }

    let todoList = Object.values(props.list||'null');
    console.log('[Comp/UserTodo] List is:', todoList);
    return(
        <div style={styles.parent}>
            {props.children}
            <div style={styles.row}>
                <LeftContent header= {props.header} stat={props.stat} footer={props.footer}/>
                <div style={styles.columnRight}>
                {todoList.map(todoList => (
                    <div style={styles.todoitem} key={todoList.title + todoList.setOn}>
                        <h4 style={styles.todotext}> {todoList.title} </h4>
                        <section>
                            <h4 style={styles.AdatesText}> {datify(todoList.setOn)} </h4> 
                            <h4 style={styles.CdatesText}> {todoList.tobecompletedBy} </h4>
                        </section>
                    </div>
                ))}
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