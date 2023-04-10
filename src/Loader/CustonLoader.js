const costomLoader = async (id) => {
   
    const loadData = await fetch('JobFeatures.json')
    const data = await loadData.json()
    let selectJOb = {}
    if(data){
        const getJob = data.find(singleData => singleData.id === id)
        selectJOb = getJob
    }
    
    return selectJOb;
}

export default costomLoader;