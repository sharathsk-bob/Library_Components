import React from 'react';
import './table.scss';

function Table(props) {

    const{ TableProps } = props;
    console.log(TableProps, "props in Table-main.js");

    return(
        <>
            <div class="col-lg-6 left-table">
                <h2 class="section-heading">Simple Table:</h2>
                <table class="table table-striped table-bordered">
                    <caption>Events</caption>
                    <thead>
                    <tr class="tablehead"> 
                        <th>GGID</th>
                        <th>Employee Name</th>
                        <th>Emp Mail Id</th>
                        <th>Designation</th>
                        <th>Grade</th>
                        <th>Location</th>
                    </tr> 
                    </thead>
                    <tbody>
                    <tr>
                        <td>46267043</td>
                        <td>Sharath Sashi Kumar</td>
                        <td>sharath.sashi-kumar@capgemini.com</td>
                        <td>Sr Analyst / Software Engineer</td>
                        <td>A</td>
                        <td>Mumbai</td>
                    </tr>
                    <tr>
                        <td>46273399</td>
                        <td>Anand Manohar Udare</td>
                        <td>anand.udare@capgemini.com</td>
                        <td>Sr Analyst / Software Engineer</td>
                        <td>A</td>
                        <td>Mumbai</td>
                    </tr>
                    <tr>
                        <td>46273491</td>
                        <td>Tanya .</td>
                        <td>tanya.a.tanya@capgemini.com</td>
                        <td>Sr Analyst / Software Engineer</td>
                        <td>A</td>
                        <td>Mumbai</td>
                    </tr>
                    <tr>
                        <td>46263383</td>
                        <td>Muskan Tyagi</td>
                        <td>muskan.tyagi@capgemini.com</td>
                        <td>Sr Analyst / Software Engineer</td>
                        <td>A</td>
                        <td>Gurgaon</td>
                    </tr>
                    <tr>
                        <td>46205868</td>
                        <td>Chithira P Nair</td>
                        <td>chithira.p-nair@capgemini.com</td>
                        <td>Analyst / Software Engineer</td>
                        <td>A</td>
                        <td>Bangalore</td>
                    </tr>
                    <tr>
                        <td>46165402</td>
                        <td>Chetan Ramesh Ningoo</td>
                        <td>chetan.ningoo@capgemini.com</td>
                        <td>Senior Manager</td>
                        <td>D</td>
                        <td>Mumbai</td>
                    </tr>
                    <tr>
                        <td>46020611</td>
                        <td>Lalith Rawal</td>
                        <td>lalith.rawal@capgemini.com</td>
                        <td>Senior Consultant</td>
                        <td>C</td>
                        <td>Mumbai</td>
                    </tr>
                    <tr>
                        <td>46205869</td>
                        <td>Sowmya Ranjan Rana</td>
                        <td>sowmya.ranjan-rana@capgemini.com</td>
                        <td>Analyst / Software Engineer</td>
                        <td>A</td>
                        <td>Mumbai</td>
                    </tr>
                    <tr>
                        <td>46264260</td>
                        <td>Saurav Nitin Trivedi</td>
                        <td>saurav-nitin.trivedi@capgemini.com</td>
                        <td>Sr Analyst / Software Engineer</td>
                        <td>A</td>
                        <td>Bangalore</td>
                    </tr>
                    <tr>
                        <td>46184203</td>
                        <td>Gaurav Kumar Srivastav</td>
                        <td>gaurav-kumar.a.shrivastav@capgemini.com</td>
                        <td>Associate Consultant</td>
                        <td>B</td>
                        <td>Gurgaon</td>
                    </tr>
                    <tr>
                        <td>75022762</td>
                        <td>Vishnu Kumar Nishad</td>
                        <td>vishnu-kumar.nishad@capgemini.com</td>
                        <td>Associate Consultant</td>
                        <td>B</td>
                        <td>Gurgaon</td>
                    </tr>
                    <tr>
                        <td>46092137</td>
                        <td>Vaishali Tyagi</td>
                        <td>vaishali.tyagi@capgemini.com</td>
                        <td>Sr Analyst / Software Engineer</td>
                        <td>A</td>
                        <td>Gurgaon</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;