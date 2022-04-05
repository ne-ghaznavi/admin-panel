import './widgets.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Widgets = ({type}) => {
    let data;

    const amont = 100;
    const diff= 20;

    switch(type) {
        case "کاربرها":
            data={
                title:"کاربرها",
                isMoney: false,
                link: "مشاهده همه کاربران",
                icon: (
                    <PersonOutlineIcon
                        className="icon" 
                        style={{
                            color: 'red',
                            backgroundColor: 'rgba(255, 0 , 0, .2)'
                        }}
                    />
                )
            };
            break;
        case "سفارش ها":
            data={
                title:"سفارش ها",
                isMoney: false,
                link: "مشاهده همه سفارش ها",
                icon: (
                    <ShoppingCartCheckoutIcon className="icon"/>
                )
            };
            break;
        case "کیف پول":
            data={
                title:"کیف پول",
                isMoney: true,
                link: "مشاهده کیف پول",
                icon: (
                    <MonetizationOnIcon className="icon"/>
                )
            };
            break;
        case "پیام ها":
            data={
                title:"پیام ها",
                isMoney: false,
                link: "مشاهده همه پیام ها",
                icon: (
                    <AccountBalanceWalletIcon className="icon"/>
                )
            };
            break;
        default:
            break;
    }

    return (
        <div className='widgets'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='count'>{data.isMoney && "$"} {amont}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
                <div className="percentage positive">
                    {diff} %
                    <KeyboardArrowUpIcon/>
                </div>
                {data.icon}
            </div>
        </div>
    );
}

export default Widgets;
