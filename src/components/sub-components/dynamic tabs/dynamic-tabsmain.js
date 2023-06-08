import React,{useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './dynamic-tabs.scss'

function DynamicMain(values) {
    const { props }=values;
    const [key, setKey] = useState('tab2');
  return (
    <Tabs className={`Tabs ${props?.theme == "dark"?"dynamic-dark":props?.theme == "cg1-blue"?"cg1-dynamic-blue":props?.theme == "cg2-purple"?"cg2-dynamic-purple":props?.theme == "light"?"dynamic-light":"" }`} activeKey={key} onSelect={(k) => setKey(k)}>
        <TabList>
          {props?.tabData?.map((x)=>{return(<Tab eventKey={`${x.heading}`}>{x.heading}</Tab>)})}
        </TabList>
        {props?.tabData?.map((x)=>{return(<TabPanel>
          <p>
            {x.description}
          </p>
        </TabPanel>)})}
      </Tabs>
  )
}

export default DynamicMain;