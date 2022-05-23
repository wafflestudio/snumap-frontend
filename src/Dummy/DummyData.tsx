import img_1 from "../Image/301_1.jpg"
import img_2 from "../Image/301_2.jpg"

interface ImgData {
    title: string,
    img: string
}

const dummyData: ImgData[] =  [{
    title: "301동_1",
    img: img_1
},{
    title: "301동_2",
    img: img_2
}];

export default dummyData;