import Welcome from 'react-welcome-page';
import '../App.css';
import Landingpage from "./LandingPage/landingpage";

function Welcome1() {
    return (
        <div id='my-container'>
            <Welcome
                loopDuration={1100}
                data={[
                    {
                        image: require('../image0.jpg'),
                        text: <h4><i>'Be Happy'</i></h4>,
                        imageAnimation: 'flipInX',
                        textAnimation: 'flash',
                        backgroundColor: '#e08d60',
                        textColor: '#002134'
                    },
                    {
                        image: require('../image1.jpg'),
                        text: <h4><i>'Be Calm'</i></h4>,
                        imageAnimation: 'lightSpeedIn',
                        textAnimation: 'bounce',
                        backgroundColor: '#b1e060',
                        textColor: '#002134'
                    },
                    {
                        image: require('../image2.webp'),
                        text: <h4><i>'Be Relax'</i></h4>,
                        textAnimation: 'rotateIn',
                        imageAnimation: 'rotateIn',
                        backgroundColor: '#e0c660',
                        textColor: '#002134'
                    },
                    {
                        image: require('../images4.png'),
                        text: <h4><i>'Be Knowledgable'</i></h4>,
                        textAnimation: 'rubberBand',
                        imageAnimation: 'jackInTheBox',
                        backgroundColor: '#60cde0',
                        textColor: '#002134'
                    },
                    {
                        image: require('../image3.jpg'),
                        text: <h4><i>'Be Successful'</i></h4>,
                        textAnimation: 'jello',
                        imageAnimation: 'rotateOut',
                        backgroundColor: '#d084dc',
                        textColor: '#002134'
                    },
                    {
                        loopDuration:'2900',
                        image: require('../pushd.jpg'),
                        text: <h1><i>Welcome To PUSH-D</i></h1>,
                        imageAnimation: 'flipInX',
                        textAnimation: 'flash',
                        backgroundColor: '#84c47d',
                        textColor: '#002134'
                    }

                ]}/>

        <Landingpage />
        </div>
    );}
export default Welcome1