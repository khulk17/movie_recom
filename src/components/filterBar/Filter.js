import React, {  useState } from 'react';
import "./Filter.css"

const Filter = ({useableData,setuseableData,data}) => {
  const [activeFilter, setActiveFilter] = useState([false,false,false,false,false,false]);
  const [selected1,setselected]=useState([]);
  
  let filters = [
    { id: 0, label: 'All', color: 'lightblue' },
    { id: 1, label: 'Comedy', color: 'lightblue' },
    { id: 2, label: 'Drama', color: 'lightgreen' },
    { id: 3, label: 'Crime', color: 'lightcoral' },
    { id: 4, label: 'Mystery', color: 'lightcoral' },
    { id: 5, label: 'Musical', color: 'lightcoral' },
  ];
  
  const handleClick = (filterId) => {
    if(filterId!==0){
      if(activeFilter[filterId]===false){
        const a=[...activeFilter];
        a[filterId]=true;
        a[0]=false;
        setActiveFilter(a);
    }else{
        const a=[...activeFilter];
        a[filterId]=false;
        a[0]=false;
        setActiveFilter(a);
    }
    }
    const selected=[...selected1];
    const filters1=filters[filterId];
    const index = selected.indexOf(filters1.label);
    console.log(index,filters1.label);
    if(index !== -1){
        selected.splice(index,1);
    }else{
        selected.push(filters1.label);
    }
    setselected(selected);
    const newarr=[];
    if(selected.length!==0 && filterId!==0){
            data.forEach(element => {
                let k=0;
                for( let i=0;i<selected.length;i=i+1){
                    if(element.Genre.includes(selected[i])){
                        k=k+1;
                    }
                }
                if( k===selected.length){
                    newarr.push(element);
                }
            });
        
        setuseableData(newarr);
    }else {
      setuseableData(data);
      const c1=[!activeFilter[0],false,false,false,false,false];
      setActiveFilter(c1);
    }
  };
//   useEffect(()=>{
//     [];
//   },[])
  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <div
          key={filter.id}
          className={`filter ${activeFilter[filter.id] ? 'active' : ''}`}
          
          onClick={() => handleClick(filter.id)}
        >
          {filter.label}
        </div>
      ))}
    </div>
  );
};

export default Filter;
