import axios from 'axios';
import { useLocation} from 'react-router-dom';

const ReserveCancel =() => {

    const location = useLocation();

    return (
        axios({
            method : 'post' ,
            url : '/GareBnB/mypage/ResCancel.do' ,
            contentType:"application/json;charset=UTF-8",
            params : {
                RES_IDX : location.state.res_idx
            }
        }).then(Response => {
            window.location.href="/myPage/ReserveListPage"
        })
        
        

    )
}
export default ReserveCancel;