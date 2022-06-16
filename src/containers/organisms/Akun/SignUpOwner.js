import {StyleSheet, Text, View, Image, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/Button';
import TextTouchable from '../../../components/atoms/TextTouchable';
import firebase from '../../../config/Firebase';
import {showMessage} from 'react-native-flash-message';

const SignUpUser = ({navigation}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (password === confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, confirmPassword)
        .then(res => {
          const data = {
            name: name,
            number: number,
            email: email,
            photo:
              '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAHgAzQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+7Ik5PJ6nufWkyfU/maG6n6n+dJQAuT6n8zRk+p/M0lFAC5PqfzNGT6n8zSUUALk+p/M0ZPqfzNJRQAuT6n8zRk+p/M0lFAC5PqfzNGT6n8zSUUALk+p/M0ZPqfzNJRQAuT6n8zRk+p/M0lFAC5PqfzNGT6n8zSUUALk+p/M0ZPqfzNJRQAuT6n8zRk+p/M0lFAC5PqfzNGT6n8zSUUALk+p/M0ZPqfzNJRQAuT6n8zRk+p/M0lFAC5PqfzNGT6n8zSUUALk+p/M0ZPqfzNJRQAuT6n8zRk+p/M0lFAC5PqfzNGT6n8zSUUALk+p/M0ZPqfzNJRQAuT6n8zRk+p/M0lFAC5PqfzNGT6n8zSUUALk+p/M0ZPqfzNJRQAuT6n8zRk+p/M0lFAC5PqfzNGT6n8zSUUALk+p/M0ZPqfzNJRQAuT6n8zRk+p/M0lFAC5PqfzNGT6n8zSUUALk+p/M0ZPqfzNJRQAuT6n8zRk+p/M0lFAC5PqfzNGT6n8zSUUALk+p/M0ZPqfzNJRQAuT6n8zRk+p/M0lFAC5PqfzNGT6n8zSUUALk+p/M0ZPqfzNJRQAuT6n8zRk+p/M0lFAC5PqfzNGT6n8zSUUALk+p/M0ZPqfzNJRQAuT6n8zRk+p/M0lFAC5PqfzNGT6n8zSUUALk+p/M0ZPqfzNJRQAuT6n8zRk+p/M0lFAC5PqfzNGT6n8zSUUALk+p/M0ZPqfzNJRQAuT6n8zRk+p/M0lFAC5PqfzNGT6n8zSUUALk+p/M0ZPqfzNJRQAuT6n8zRk+p/M0lFAC5PqfzNGT6n8zSUUALk+p/M0ZPqfzNJRQAuT6n8zRk+p/M0lFAC5PqfzNGT6n8zSUUASoSQcnPP+FFCdD9f6CigCNup+p/nSUrdT9T/OkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCVOh+v9BRQnQ/X+gooAjbqfqf50lK3U/U/wA6SgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAorgvGPxS+HPw+hafxr428NeGwF3rFqurWdtdSjqBBZtL9rnYgghYYXYg5ANfI3jP/AIKK/AHw2ZYdCk8R+NbmPco/sfSzZWTOAMD7XrElizISSPMht5l4yu7IyAfe1FfjR4q/4KieJ5zJH4M+Gmi6ch3CK58QareapLjPyu1tYx6ZGrbedv2iRQ3qBz8/eIf+CgX7Sets4tPE+k+HYHJxDonh/TEKgjAAuNRh1C6GPUTgk8n0oA/oYppd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JJJJJJJJ5NNoooAKKKKACiiigAooooAKKKKACv0e/YR/ZCPxl1tPiT49sXHw18PXwWzsZ1ZF8XavasGa0AIBfSbJwv8AaEinbPJ/oak4uAnyr+zp8FNZ+PfxS0HwJpglhsZZRf8AiLU0QsmlaBaOjX90zY2iV1Zba0RiPMupol6biP6l/B/hLQfAfhjQ/B/hiwi03QvD+n2+m6dZwqFWOCBAN7kcyTzPvmuJmy808kkrksxJAN+2trezt4LS0gitrW1hjt7a3gjWKCCCFBHFDFEgVI440VURFAVVAAAAqaiigAooooAKKKKACiiigAooooAKKKKACiiigD5b/ao/Zl8NftG+B5tPnittP8baNDPP4R8RmMCW2uSpY6beyKPMl0q+cKs8R3eTJtuYVEiHd/Mv4v8ACWv+BfEuteEfE+nz6Xrug38+najZTqVeKeBsZU4xJDKhWWCZMxzQvHLGzI6k/wBhlflt/wAFHP2Z4fG3hST41+EtPH/CV+EbNV8VQW0f7zWvDMAwL11QEy3miAli+C76cZFZiLaIAA/BiiiigAooooAKKKKACiiigAooooA+iv2av2gNe+AHj61160aa78Nam8Fl4s0NZGEWoab5n+viQnYuoWO5prOYjOd8LHy5nFf0jeFPFOh+NfDmj+K/Dd/DqWh67Yw6hp15C2UlgmXO1h96OaJw0M8LhZIZkkikVXRgP5L6/SX9gX9pdvAPiSL4S+MNQK+DvFN6P7AurqT91oPiG5YKsQduIbDV32xyqSI4r0xzfL507kA/cuijr0ooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCVOh+v9BRQnQ/X+gooAjbqfqf50lK3U/U/wA6SgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKr3l3a6faXN9ezxWtnZwS3V1czuscMFvAjSzTSuxCpHHGrOzEgAAmrFfmr/wUR+PTeDPB1r8JfD155fiDxtbNceIJIJMTWHhdZGi+zsVIZH1m4jeEjOTZwXAYBZlJAPzi/a3+Pt38dvidfXtlcSjwV4befSPCNnucRvaxSFbnV5IzgfadWmTzyxUPHara27cwkn5WoooAKKKKACiiigAooooAKKK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K1jABIXzJ3QPI2MJEm6SRvlRWYgUAdDXyP8AtP8A7XPgT9nXRZrWSe38QfEK9tmbRfCVtOpliLofK1DW3jLNYaepwyh9txd4KWyMA8ifEv7R/wDwUxgEeoeE/gDA7yMJLa4+IGqWxRUBBVn8PaXcKHLD/lnf6gigfeitG+SSvx21vXNY8Sarfa5r+pXusavqVw91f6lqFxLdXl3cSHLyzzzM8jsT6tgABVAUAAA6v4nfE7xj8XfGGqeN/HGqzarrWqSliWJW1sbVSfs+n6fb5MdpY2qERwwRgADLuXld3bz+iigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP6WP2Or1r/APZp+E07MWKeH57TJJPFhq+o2SgE9lFuFA7AYya+mK+Sv2GJPN/Za+FzZziLxVH68ReNvEkQ/ABMD2r61oAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAlTofr/QUUJ0P1/oKKAI26n6n+dJSt1P1P86SgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+dL9vWPZ+1L8R2x/rYvCEg9wPBPh2L8RmMj65r48r7g/wCChdk1r+0t4hnKkDUNA8LXakgjcE0iCyyD3ANmVyO6njivh+gAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCWGea3lSe3lkgmidZI5YnaOSN1OVdHUhlZSAVYEEEAgg19q/CL9vr4/fCuO102512Px74etwiLpPjHzb+4ihUgeXaa0siarAFT5I1luLmCMAAQEACviWigD98/h7/AMFRvhBr0cFv4/8ADniPwRfNtWa6tY08RaMGPDOslqIdTRc87f7OkIB4ZsGvr3wv+1T+zv4wjjfRfi94J8yUZS11TWINDvTzjH2PWjYXOfYRngg9K/lPpQSOhI+hxQB/Ylp/inwzqyLJpfiHQ9RjcBkex1Wxu1ZT0KtBO4IORgg89q0pr+xt0Mk95awIBkvLcQxrgck7ncD9a/jeE0w6SyD6Ow/rS+fP/wA9pf8Av4//AMVQB/XPrnxd+FfhlXfxD8R/A+iqilm/tLxRotowA6/JNeK5PYAKSTwATxXzh42/4KAfsyeDUmSLxtJ4tvYshbPwlpl5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vG77PGpb0B4+fvEP/BP39pPRGc2nhjSfEUCE4m0TxBpjlgBkEW+ozafdHPoICQeD61/QxRQB/MJrH7Mn7QGhlhqHwj8dbUYq0tnoF9qcIx387TYruLaezb9p7GvPb/4deP8AS2K6l4J8V2DL94Xfh/VbcjnHPnWid+M9K/q9ppRD1VT9VB/pQB/JDNpWp25Kz6dewkdRLazRkfUOgxVdLO6kOEtp3PTCxOx/IKTX9cnlRf8APOP/AL4X/CjyYv8AnlH/AN8L/hQB/Jha+F/El8QLPQNZuy3AFtpl5MT9BHC2f/rH0rs9N+CXxg1koNL+F/j2/wDMICG28J65Kp3dDvWx2Af7RYLjnOK/qdEcY6RoPoqj+lOAA6AD6DFAH82eh/sYftK68V+zfC/WbJWIAfWbjTdFCg4+Zl1O9tpFAzk5TPsTxXuPhr/gmn8btVMb6/rXg3wxE3MiS6hdardxj0EWn2bW7v7fbAvff0Ffu5RQB+WnhH/gl/4KszHL41+Ieva04wXtdC0+z0a3JwMqZ7ttUnZd2eVELY9DX1l4I/Y+/Z48BmGXTPhzpOqXkJDLf+J/N8R3HmAkiVY9Uae0hkGeDBbRBcAqARX0zRQBWtLO0sIIrWxtbeztYEEcNvawx28ESDokcUSpGijsqqB7VZoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAlTofr/AEFFCdD9f6CigCNup+p/nSUrdT9T/OkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCVOh+v9BRQnQ/X+gooAjbqfqf50lOIOTwep7H1pMH0P5GgBKKXB9D+RowfQ/kaAEopcH0P5GjB9D+RoASilwfQ/kaMH0P5GgBKKXB9D+RowfQ/kaAEopcH0P5GjB9D+RoASilwfQ/kaMH0P5GgBKKXB9D+RowfQ/kaAEopcH0P5GjB9D+RoASilwfQ/kaMH0P5GgBKKXB9D+RowfQ/kaAEopcH0P5GjB9D+RoASilwfQ/kaMH0P5GgBKKXB9D+RowfQ/kaAEopcH0P5GjB9D+RoASilwfQ/kaMH0P5GgBKKXB9D+RowfQ/kaAEopcH0P5GjB9D+RoASilwfQ/kaMH0P5GgBKKXB9D+RowfQ/kaAEopcH0P5GjB9D+RoASilwfQ/kaMH0P5GgBKKXB9D+RowfQ/kaAEopcH0P5GjB9D+RoASilwfQ/kaMH0P5GgBKKXB9D+RowfQ/kaAEopcH0P5GjB9D+RoASilwfQ/kaMH0P5GgBKKXB9D+RowfQ/kaAEopcH0P5GjB9D+RoASilwfQ/kaMH0P5GgBKKXB9D+RowfQ/kaAEopcH0P5GjB9D+RoASilwfQ/kaMH0P5GgBKKXB9D+RowfQ/kaAEopcH0P5GjB9D+RoASilwfQ/kaMH0P5GgBKKXB9D+RowfQ/kaAEopcH0P5GjB9D+RoASilwfQ/kaMH0P5GgBKKXB9D+RowfQ/kaAEopcH0P5GjB9D+RoASilwfQ/kaMH0P5GgBKKXB9D+RowfQ/kaAEopcH0P5GjB9D+RoASilwfQ/kaMH0P5GgBKKXB9D+RowfQ/kaAEopcH0P5GjB9D+RoASilwfQ/kaMH0P5GgBKKXB9D+RowfQ/kaAEopcH0P5GjB9D+RoAkTofr/QUUICAcjHP+FFAH/9k=',
          };
          const uid = res.user.uid;
          firebase.database().ref(`users/owner/${uid}`).set(data);
          navigation.replace('OwnerScreen');
          showMessage({
            message: 'Your Registration Is Successful',
            type: 'default',
            backgroundColor: 'green', // background color
            color: 'white', // text color
          });
        })
        .catch(error =>
          showMessage({
            message: error.message,
            type: 'default',
            backgroundColor: 'red', // background color
            color: 'white', // text color
          }),
        );
    } else {
      Alert.alert('Salah');
    }
  };

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.fontUser}>Owner</Text>
          <Text style={styles.fontSignup}>Sign Up</Text>
          <Text style={styles.fontCreate}>First create your account</Text>
        </View>

        {/* Render TextInput */}
        <View style={styles.InputContainer}>
          <Input
            placeholder={'Full Name'}
            input={styles.input}
            value={name}
            onChangeText={value => setName(value)}
          />
          <Input
            placeholder={'Email'}
            input={styles.input}
            value={email}
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
          />
          <Input
            placeholder={'Phone Number'}
            type={number}
            input={styles.input}
            value={number}
            onChangeText={value => setNumber(value)}
            keyboardType="number-pad"
          />
          <Input
            placeholder={'Password'}
            type={number}
            TextEntry={true}
            input={styles.input}
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
          <Input
            placeholder={'Confirm your password'}
            type={number}
            TextEntry={true}
            input={styles.input}
            value={confirmPassword}
            onChangeText={value => setConfirmPassword(value)}
            secureTextEntry={true}
          />
        </View>

        {/* Render Button Sign Up dan Touchable Sign In */}
        <Button
          title={'Sign Up'}
          btnView={styles.btnSignUp}
          onPress={() => {
            handleSubmit();
          }}
        />

        <TextTouchable
          ViewContainer={styles.ContainertxtSignIn}
          txtStyling={styles.textAlready}
          text={'Already Have an Account'}
          stylingTitle={styles.titleSignin}
          onPress={() => navigation.replace('OwnerScreen')}
          title={'Sign In'}
        />
      </View>
    </ScrollView>
  );
};

export default SignUpUser;

const styles = StyleSheet.create({
  InputContainer: {
    marginTop: 70,
    alignItems: 'center',
  },
  fontSignup: {
    fontWeight: 'bold',
    fontSize: 40,
    alignItems: 'center',
    color: '#000000',
  },
  fontUser: {
    fontWeight: 'bold',
    fontSize: 17,
    alignItems: 'center',
    color: '#000000',
    marginTop: 70,
  },
  fontCreate: {
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center',
    color: '#A8A6A7',
    marginTop: 27,
  },
  titleSignin: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textAlready: {
    color: '#808080',
    fontSize: 16,
  },
  btnSignUp: {
    marginTop: 40,
    alignItems: 'center',
  },
  ContainertxtSignIn: {
    flexDirection: 'row',
    marginLeft: 83,
    marginTop: 11.27,
  },
  input: {
    height: 54,
    width: 343,
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 0.3,
    backgroundColor: '#EDEDF0',
    marginTop: 20,
  },
});
