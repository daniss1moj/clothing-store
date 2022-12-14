import './form-input.scss'
const FormInput = ({label, ...otherProps}) => {
    return ( 
        <div className="group">
            <input type="text" {...otherProps} className="form-input" />
            {label && <label className={`${otherProps.value.length ? 'shrink' : null} form-input-label`}>{label}</label>}     
        </div>
     );
}
 
export default FormInput;