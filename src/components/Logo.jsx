import financeLogo from '../assets/finance-logo.jpg';

const Logo = () => {
    return (
        <div className="logo w-16 rounded-md">
            <img src={financeLogo} alt="Finance logo" />
            <h1 className="text-lg font-bold size-8 text-slate-400">Finance</h1>
        </div>
    )
}

export default Logo