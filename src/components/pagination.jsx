import React from 'react'


class Pagination extends React.Component{
 
    state = {
         isEditable: false
     }

    render() {
        return (
            <div className="d-flex my-5 align-items-center">
                 <button className="btn btn-warning">Previous</button>
                <div className="flex-grow-1 text-center">
                    {this.state.isEditable ? (
                           <input />
                    ): (
                            <p style={{ userSelect: 'none', lineHeight: '1.1' }} title="Double Tap To Jump" onDoubleClick={() => {
                                this.setState({isEditable: true})
                            }}>
                                {1} of {100}
                                <br />
                                <small>Double Tap To Edit</small>
                            </p>
                    ) }
                 </div>
                 <button className="btn btn-warning ml-auto">Next</button>
             </div>
        );
    }
}

export default Pagination;