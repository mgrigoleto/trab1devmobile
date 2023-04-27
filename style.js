import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bloco:{
        width:'100%',
        flexDirection:'colunm',
        padding:'30px',
        backgroundColor:'#3d3dff',
        margin:20,
        justifyContent:'center',
        alignItems:'center'
    },
    blocoIMG:{
        width:'260px',
        height:'400px',
    },
    img:{
        padding:'30px',
        width:'100%',
        height:'100%',        
        borderRadius:'10px',
        
    },
    title:{
        marginTop:'-15px',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:'25px',
        color:'white',
    },
    subtitle:{
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:'20px',
        fontSize:'20px',
        color:'white',
    },
    sinopse:{
        textAlign:'justify',
        color:'white',        
        paddingTop:'20px',
        paddingBottom:'20px',
        fontSize:'15px',
    },
    btn:{
        width:'130px',
    }
})

export default styles;