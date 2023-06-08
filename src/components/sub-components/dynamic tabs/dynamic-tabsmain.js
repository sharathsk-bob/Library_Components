import React,{useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './dynamic-tabs.scss'

function DynamicMain(values) {
    const { props }=values;
    const [key, setKey] = useState('tab2');
  return (
    <Tabs className={`Tabs ${props?.theme == "dark"?"dark":props?.theme == "cg1-blue"?"cg1-blue":props?.theme == "cg2-purple"?"cg2-purple":props?.theme == "light"?"light":"" }`} activeKey={key} onSelect={(k) => setKey(k)}>
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