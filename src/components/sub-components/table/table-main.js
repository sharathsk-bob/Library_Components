import React, { useState, useMemo, useEffect }  from 'react';
import DataTable from 'react-data-table-component';
import ReactPaginate from 'react-paginate';
// import { MDBDataTable } from 'mdbreact';
import './table.scss';

// const enterdata = {
//     columns: [
//         {
//             label: 'GGID',
//             field: 'Employee_Id',
//             // selector: row => row.Employee_Id,
//         },
//         {
//             label: 'Employee Name',
//             field: 'Name',
//             // selector: row => row.Name,
//         },
//         {
//             label: 'Employee Mail id',
//             field: 'email',
//             // selector: row => row.email,
//         },
//         {
//             label: 'Designation',
//             field: 'designation',
//             // selector: row => row.designation,
//         },
//         {
//             label: 'Grade',
//             field: 'grade',
//             // selector: row => row.grade,
//         },
//         {
//             label: 'Location',
//             field: 'location',
//             // selector: row => row.location,
//             // sortable: true,
//         },
//     ],

//     rows: [
//         {
//             Employee_Id: 46092137,
//             Name: "Vaishali Tyagi",
//             email: "vaishali.tyagi@capgemini.com",
//             designation: "Sr Analyst / Software Engineer",
//             grade: "A",
//             location: "Gurgaon",
//         },
//         {
//             Employee_Id: 46267043,
//             Name: "Sharath Sashi Kumar",
//             email: "sharath.sashi-kumar@capgemini.com",
//             designation: "Sr Analyst / Software Engineer",
//             grade: "A",
//             location: "Mumbai",
//         },
//         {
//             Employee_Id: 46273399,
//             Name: "Anand Manohar Udare",
//             email: "anand.udare@capgemini.com",
//             designation: "Sr Analyst / Software Engineer",
//             grade: "A",
//             location: "Mumbai",
//         },
//         {
//             Employee_Id: 46273491,
//             Name: "Tanya",
//             email: "tanya.a.tanya@capgemini.com",
//             designation: "Sr Analyst / Software Engineer",
//             grade: "A",
//             location: "Mumbai",
//         },
//         {
//             Employee_Id: 46263383,
//             Name: "Muskan Tyagi",
//             email: "muskan.tyagi@capgemini.com",
//             designation: "Sr Analyst / Software Engineer",
//             grade: "A",
//             location: "Gurgaon",
//         },
//         {
//             Employee_Id: 46205868,
//             Name: "Chithira P Nair",
//             email: "chithira.p-nair@capgemini.com",
//             designation: "Analyst / Software Engineer",
//             grade: "A",
//             location: "Banglore",
//         },
//         {
//             Employee_Id: 46165402,
//             Name: "Chetan Ramesh Ningoo",
//             email: "chetan.ningoo@capgemini.com",
//             designation: "Senior Manager",
//             grade: "D",
//             location: "Mumbai",
//         },
//         {
//             Employee_Id: 46083526,
//             Name: "Kanika Singla",
//             email: "kanika.singla@capgemini.com",
//             designation: "Associate Consultant",
//             grade: "B",
//             location: "Gurgaon",
//         },
//         {
//             Employee_Id: 46020611,
//             Name: "Lalith Rawal",
//             email: "lalith.rawal@capgemini.com",
//             designation: "Senior Consultant",
//             grade: "C",
//             location: "Mumbai",
//         },
//         {
//             Employee_Id: 46205869,
//             Name: "Sowmya Ranjan Rana",
//             email: "sowmya.ranjan-rana@capgemini.com",
//             designation: "Analyst / Software Engineer",
//             grade: "A",
//             location: "Mumbai",
//         },
    
//         {
//             Employee_Id: 46264260,
//             Name: "Saurav Nitin Trivedi",
//             email: "saurav-nitin.trivedi@capgemini.com",
//             designation: "Sr Analyst / Software Engineer",
//             grade: "A",
//             location: "Bangalore",
//         },
//         {
//             Employee_Id: 46184203,
//             Name: "Gaurav Kumar Srivastav",
//             email: "gaurav-kumar.a.shrivastav@capgemini.com",
//             designation: "Associate Consultant",
//             grade: "B",
//             location: "Gurgaon",
//         },
//         {
//             Employee_Id: 75022762,
//             Name: "Vishnu Kumar Nishad",
//             email: "vishnu-kumar.nishad@capgemini.com",
//             designation: "Associate Consultant",
//             grade: "B",
//             location: "Gurgaon",
//         },
//     ]
// }

const columns = [
    {
        name: 'GGID',
        selector: row => row.Employee_Id,
        sortable: true,
    },
    {
        name: 'Employee Name',
        selector: row => row.Name,
        sortable: true,
    },
    {
        name: 'Employee Mail id',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Designation',
        selector: row => row.designation,
        sortable: true,
    },
    {
        name: 'Grade',
        selector: row => row.grade,
        sortable: true,
    },
    {
        name: 'Location',
        selector: row => row.location,
        sortable: true,
    },
];

const data = [
    {
        Employee_Id: 46092137,
        Name: "Vaishali Tyagi",
        email: "vaishali.tyagi@capgemini.com",
        designation: "Sr Analyst / Software Engineer",
        grade: "A",
        location: "Gurgaon",
    },
    {
        Employee_Id: 46267043,
        Name: "Sharath Sashi Kumar",
        email: "sharath.sashi-kumar@capgemini.com",
        designation: "Sr Analyst / Software Engineer",
        grade: "A",
        location: "Mumbai",
    },
    {
        Employee_Id: 46273399,
        Name: "Anand Manohar Udare",
        email: "anand.udare@capgemini.com",
        designation: "Sr Analyst / Software Engineer",
        grade: "A",
        location: "Mumbai",
    },
    {
        Employee_Id: 46273491,
        Name: "Tanya",
        email: "tanya.a.tanya@capgemini.com",
        designation: "Sr Analyst / Software Engineer",
        grade: "A",
        location: "Mumbai",
    },
    {
        Employee_Id: 46263383,
        Name: "Muskan Tyagi",
        email: "muskan.tyagi@capgemini.com",
        designation: "Sr Analyst / Software Engineer",
        grade: "A",
        location: "Gurgaon",
    },
    {
        Employee_Id: 46205868,
        Name: "Chithira P Nair",
        email: "chithira.p-nair@capgemini.com",
        designation: "Analyst / Software Engineer",
        grade: "A",
        location: "Banglore",
    },
    {
        Employee_Id: 46165402,
        Name: "Chetan Ramesh Ningoo",
        email: "chetan.ningoo@capgemini.com",
        designation: "Senior Manager",
        grade: "D",
        location: "Mumbai",
    },
    {
        Employee_Id: 46083526,
        Name: "Kanika Singla",
        email: "kanika.singla@capgemini.com",
        designation: "Associate Consultant",
        grade: "B",
        location: "Gurgaon",
    },
    {
        Employee_Id: 46020611,
        Name: "Lalith Rawal",
        email: "lalith.rawal@capgemini.com",
        designation: "Senior Consultant",
        grade: "C",
        location: "Mumbai",
    },
    {
        Employee_Id: 46205869,
        Name: "Sowmya Ranjan Rana",
        email: "sowmya.ranjan-rana@capgemini.com",
        designation: "Analyst / Software Engineer",
        grade: "A",
        location: "Mumbai",
    },

    {
        Employee_Id: 46264260,
        Name: "Saurav Nitin Trivedi",
        email: "saurav-nitin.trivedi@capgemini.com",
        designation: "Sr Analyst / Software Engineer",
        grade: "A",
        location: "Bangalore",
    },
    {
        Employee_Id: 46184203,
        Name: "Gaurav Kumar Srivastav",
        email: "gaurav-kumar.a.shrivastav@capgemini.com",
        designation: "Associate Consultant",
        grade: "B",
        location: "Gurgaon",
    },
    {
        Employee_Id: 75022762,
        Name: "Vishnu Kumar Nishad",
        email: "vishnu-kumar.nishad@capgemini.com",
        designation: "Associate Consultant",
        grade: "B",
        location: "Gurgaon",
    },
];

function Table(props) {

    const{ TableProps } = props;
    console.log(TableProps, "props in Table-main.js");

    let showpagination = false;
    let showstriped = false;
    let setpageNo = 0;
    let color = "";
    let bgColor = "";

    if(TableProps.Choice_TableStriped == "Yes"){
        showstriped = true;
    }

    if(TableProps.Choice_Pagination === "Yes"){
        showpagination = true;
        if(TableProps.Choice_pageNo === "5" ) {
            setpageNo = 5;
        } else if(TableProps.Choice_pageNo === "10" ) {
            setpageNo = 10;
        } else if(TableProps.Choice_pageNo === "15" ) {
            setpageNo = 15;
        }
    } else {
        setpageNo = data.length;
    }

    if(TableProps.Choice_Theme == "Dark") {
        bgColor = "#242424"
        color = "#fff"
    } else if(TableProps.Choice_Theme == "Normal") {
        bgColor = "#B7C9E2"
        color = "#242424"
    } else if(TableProps.Choice_Theme == "cg1") {
        bgColor = "#0070AD"
        color = "#fff"
    } else if(TableProps.Choice_Theme == "cg2") {
        bgColor = "#2b0a3d"
        color = "#fff"
    }

    function PaginatedItems({ itemsPerPage }) {

        const [itemOffset, setItemOffset] = useState(0);
      
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = data.slice(itemOffset, endOffset);
        console.log("This is current start page????", currentItems);
        const pageCount = Math.ceil(data.length / itemsPerPage);
      
        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % data.length;
          console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
          setItemOffset(newOffset);
        };

        const [filterText, setFilterText] = useState("");
        const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

        const filteredItems = data.filter(
            item =>
            JSON.stringify(item)
                .toLowerCase()
                .indexOf(filterText.toLowerCase()) !== -1
        );

        const subHeaderComponent = useMemo(() => {
            const handleClear = () => {
              if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText("");
              }
            };
        
            return (
                <>  
                    <div className='sub-Theader'>               
                        <caption className='caption-position'>{TableProps.tablecaption} :</caption>
                        <div className='search-box d-flex ml-auto'>  
                            <input
                                className='filter-input'
                                // id="search"
                                type="text"
                                placeholder="Search..."
                                value={filterText}
                                onChange={e => setFilterText(e.target.value)}
                            />
                            {/* <i class="fa fa-search fa-lg" aria-hidden="true"></i> */}
                            { filterText == '' ? ( " " ) : (
                                <button className={`filter-close Tbtn-${TableProps.Choice_Theme}`} onClick={handleClear}>x</button>
                            )}
                        </div>
                    </div>
                </> 
            );
        }, [filterText, resetPaginationToggle]);
      
        return (
          <>
                <DataTable
                    columns={columns}
                    data={ (filterText == '') ? currentItems : filteredItems }
                    subHeader
                    subHeaderComponent={subHeaderComponent}
                    //selectableRows
                    // paginationDefaultPage={currentItems}
                    // paginationTotalRows = { data.length / pageCount }  
                    paginationRowsPerPageOptions={[setpageNo]}
                    paginationPerPage={setpageNo}
                    pagination = {showpagination}
                    highlightOnHover
                    striped = {showstriped}
                    customStyles={tableCustomStyles}
                />
                <div class="pagination-footer">
                    
                { TableProps.Choice_Pagination === "Yes" ?
                    (
                        <>
                            <p>Displaying {TableProps.Choice_pageNo} entries per page</p>
                            <ReactPaginate
                                // breakLabel="..."
                                previousLabel="Previous"
                                nextLabel="Next"
                                onPageChange={handlePageClick}
                                // pageRangeDisplayed={5}
                                pageCount={pageCount}
                                renderOnZeroPageCount={null}
                                activeClassName={`Tbtn-${TableProps.Choice_Theme}`}
                            />
                        </>
                    ) : ( <p>Displaying All entries</p> )
                }
                </div>
                
          </>
        );
      }

    const tableCustomStyles = {
        headRow: {
          style: {
            fontSize: '16px',
            fontWeight: 'bold', 
            color: color,
            backgroundColor: bgColor,
            borderRight: '2px black solid'
          },
        },
        rows: {
          style: {
            fontSize: '14px',
            color: "STRIPEDCOLOR",
            backgroundColor: "rgb(250, 250, 250)"
          },
          stripedStyle: {
            fontSize: '14px',
            color: "NORMALCOLOR",
            backgroundColor: "rgb(255, 255, 255)"
          }
        }
    }

    return(
        <>
            <div class={`Table-Content`}>
                {/* <h2 class="table-heading">Table:</h2> */}
                
                <PaginatedItems itemsPerPage={setpageNo} />
                {/* <Styles>
                    <MDBDataTable
                        striped
                        bordered
                        small
                        hover
                        data={enterdata}
                        />
                </Styles> */}

                {/* <table class="table table-striped table-bordered">
                    <caption className='caption-position'>Events</caption>
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
                </table> */}
            </div>
        </>
    )
}

export default Table;