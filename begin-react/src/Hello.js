import React, {Component} from 'react';

// function Hello({color, name, isSpecial}) {
//     return (
//         <div style={{color:color}}>
//             {isSpecial && <b>*</b>}
//             안녕하세요 {name}
//         </div>
//     )
// }

class Hello extends Component {
    static defaultProps = {
      name : '이름없음'
    };
    render() { // 클래스형 컴포넌트에서는 render() 메서드가 필수이다.
        const {color, name, isSpecial} = this.props;
        return (
            <div style={{color:color}}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        );
    }
}

export default Hello; // Hello 컴포넌트를 내보낸다는 뜻. 이렇게 해주면 다른 컴포넌트에서 불러와서 사용 가능.
