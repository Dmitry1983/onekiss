// @ts-nocheck
export const Base = {
    set01: {
        title: "Thank you! Now more specific questions",
        uri: require('../assets/img01.jpg'),
    },
    set02: {
        title: "Do you want to find new acquaintances?",
        uri: require('../assets/img02.jpg'),
    },
    set03: {
        title: "Do you play a lot of sports?",
        uri: require('../assets/img03.jpg'),
    },
    set04: {
        title: "Do you like computer games?",
        uri: require('../assets/img04.jpg'),
    },
    set05: {
        title: "Do you have a desire to create a big family?",
        uri: require('../assets/img05.jpg'),
    },
    set06: {
        title: "Do you have a favorite hobby?",
        uri: require('../assets/img06.jpg'),
    },
    set07: {
        title: "Do you often read books?",
        uri: require('../assets/img07.jpg'),
    },
    set08: {
        title: "Do you like to have picnics?",
        uri: require('../assets/img08.jpg'),
    },
    set09: {
        title: "Do you want to meet someone for a serious relationship?",
        uri: require('../assets/img09.jpg'),
    },
    set10: {
        title: "Do you fantasize a lot?",
        uri: require('../assets/img10.jpg'),
    },
    set11: {
        title: "Are there things or values in your life for which you are able to surpass yourself?",
        uri: require('../assets/img11.jpg'),
    },
    set12: {
        title: "Are you often late?",
        uri: require('../assets/img12.jpg'),
    },
    set13: {
        title: "Are you often in the spotlight?",
        uri: require('../assets/img13.jpg'),
    },
    set14: {
        title: "Do you like to start the morning with exercises?",
        uri: require('../assets/img14.jpg'),
    },
    set15: {
        title: "Do you have something that inspires you?",
        uri: require('../assets/img15.jpg'),
    },
    set16: {
        title: "Do you consider yourself a good person?",
        uri: require('../assets/img16.jpg'),
    },
    set17: {
        title: "Thank you for filling out your profile.We will review your profile and notify the result of your selection.Thank you for using our product.",
        uri: require('../assets/img17.jpg'),
    },

}




import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
export const PolicyText = () => {
    const { view, text, title, textCenter } = styles
    return (
        <View style={view}>
            <Text style={title}>Privacy Policy</Text>
            <Text style={text}>
                {"\n"}
                Onekiss Apps built the One Kiss - online dating a live chat app as
                a Free app.This SERVICE is provided by
                Onekiss Apps at no cost and is intended for use as
                is.
                {"\n"}

                This page is used to inform visitors regarding my
                policies with the collection, use, and disclosure of Personal
                Information if anyone decided to use my Service.
                {"\n"}

                If you choose to use my Service, then you agree to
                the collection and use of information in relation to this
                policy.The Personal Information that I collect is
                used for providing and improving the Service.I will not use or share your information with
                anyone except as described in this Privacy Policy.
                {"\n"}
                The terms used in this Privacy Policy have the same meanings
                as in our Terms and Conditions, which is accessible at
                One Kiss - online dating a live chat unless otherwise defined in this Privacy Policy.
                Information Collection and Use
                For a better experience, while using our Service, I
                may require you to provide us with certain personally
                identifiable information.The information that
                I request will be retained on your device and is not collected by me in any way.
                {"\n"}
                The app does use third party services that may collect
                information used to identify you.
                {"\n"}
                {"\n"}
                Link to privacy policy of third party service providers used
                by the app :
            </Text>
            <TouchableOpacity onPress='https://www.google.com/policies/privacy/' >
                <Text style={textCenter}>
                    Google Play Services
                    </Text>
            </TouchableOpacity>

            <Text style={text}>
                {"\n"}
                I want to inform you that whenever you
                use my Service, in a case of an error in the app
                I collect data and information(through third party
                products) on your phone called Log Data.This Log Data may
                include information such as your device Internet Protocol
                (“IP”) address, device name, operating system version, the
                configuration of the app when utilizing my Service,
                the time and date of your use of the Service, and other
                statistics.

            </Text >
            <Text style={textCenter}>Cookies</Text>

            <Text style={text}>
                {"\n"}
                Cookies are files with a small amount of data that are
                commonly used as anonymous unique identifiers.These are sent
                to your browser from the websites that you visit and are
                stored on your device's internal memory.
                {"\n"}
                This Service does not use these “cookies” explicitly.However,
                the app may use third party code and libraries that use
                “cookies” to collect information and improve their services.
                You have the option to either accept or refuse these cookies
                and know when a cookie is being sent to your device.If you
                choose to refuse our cookies, you may not be able to use some
                portions of this Service.{"\n"}
            </Text >
            <Text style={textCenter}>Service Providers</Text>

            <Text style={text}>
                I may employ third - party companies and individuals due to the following reasons:
                To facilitate our Service;
                To provide the Service on our behalf;
                To perform Service-related services; or To assist us in analyzing how our Service is used.
                I want to inform users of this Service
                that these third parties have access to your Personal
                Information. The reason is to perform the tasks assigned to
                them on our behalf. However, they are obligated not to
                disclose or use the information for any other purpose.
                {"\n"}
            </Text >
            <Text style={textCenter}>Security</Text>
            <Text style={text}>
                I value your trust in providing us your
                Personal Information, thus we are striving to use commercially
                acceptable means of protecting it. But remember that no method
                of transmission over the internet, or method of electronic
                storage is 100% secure and reliable, and I cannot
                guarantee its absolute security.
                  {"\n"}
            </Text>
            <Text style={textCenter}>Links to Other Sites</Text>
            <Text style={text}>
                This Service may contain links to other sites. If you click on
                a third-party link, you will be directed to that site. Note
                that these external sites are not operated by me.
                Therefore, I strongly advise you to review the
                Privacy Policy of these websites. I have
                no control over and assume no responsibility for the content,
                privacy policies, or practices of any third-party sites or
                services.
                  {"\n"}
            </Text>
            <Text style={textCenter}>Children’s Privacy</Text>

            <Text style={text}>
                These Services do not address anyone under the age of 13.
                I do not knowingly collect personally
                identifiable information from children under 13. In the case
                I discover that a child under 13 has provided
                me with personal information, I immediately
                delete this from our servers. If you are a parent or guardian
                and you are aware that your child has provided us with
                personal information, please contact me so that
                I will be able to do necessary actions.
                  {"\n"}
            </Text>
            <Text style={textCenter}>Changes to This Privacy Policy</Text>
            <Text style={text}>
                {"\n"}
                I may update our Privacy Policy from
                time to time.
                Thus, you are advised to review this page
                periodically for any changes. I will
                notify you of any changes by posting the new Privacy Policy on
                this page.

                This policy is effective as of 2020-05-20
                Contact Us
                If you have any questions or suggestions about my
                Privacy Policy, do not hesitate to contact me at info@onekissonline.com.

                This privacy policy page was created at
                https://privacypolicytemplate.net{"\n"}
                and modified/generated by {"\n"} App Privacy Policy Generator
                https://app-privacy-policy-generator.firebaseapp.com/

            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        textAlign: 'justify',
        fontSize: 14,
    },
    textCenter: {
        textAlign: 'center',
        fontSize: 14,
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    view: {
        margin: 3,
        //backgroundColor:'#fbecd9',
    }
})