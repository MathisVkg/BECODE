
<?php 

class Form{
    private $data;
    public $surround = 'p';

    public function __construct($data = array()){
        $this->data = $data;
    }

    private function surround($html){
        return "<{$this->surround}>Username $html</{$this->surround}>";
    }

    private function getValue($index){
        return isset($this->data[$index]) ? $this->data[$index] : null;
    }

    public function input($name){
        echo '<p class="nameText">Username:</p>';
        echo '<input type="text" name="' . $name . '" value= "' . $this->getValue($name) . '" class="usernameClass">';
    }

    public function submit(){
        return '<button type="submit" class="submit">submit</button>';
    }

    public function select($country){
        echo '<div class="selectGroup">';
        echo '<select name="' . $country . '" value="' . $this->getValue($country) . '">';
        echo '<option value="1">Option 1</option>';
        echo '<option value="2">Option 2</option>';
        echo '<option value="3">Option 3</option>';
        echo '<option value="4">Option 4</option>';
        echo '</select>';
        echo '</div>';
    }

    public function textarea($text){
        return '<textarea name="' . $text . '" value= "' . $this->getValue($text) . '" cols="39" rows="10" placeholder="Your message here..."></textarea>';
    }

    public function inputRadio($gender){
        echo '<div class="genderGroup">';
        echo '<input type="radio" name="' . $gender . '" value= "1" class="inputRadio">';
        echo '<p class="genderText">Male</p>';
        echo '</div>';
        echo '<div class="genderGroup">';
        echo '<input type="radio" name="' . $gender . '" value= "2" class="inputRadio">';
        echo '<p class="genderText">Female</p>';
        echo '</div>';
    }

    public function inputCheckbox($box){
        echo '<div class="checkboxGroup">';
        echo '<input type="checkbox" name="' . $box . '" value= "check1">Option 1';
        echo '<input type="checkbox" name="' . $box . '" value= "check2">Option 2';
        echo '<input type="checkbox" name="' . $box . '" value= "check3">Option 3';
        echo '<input type="checkbox" name="' . $box . '" value= "check4">Option 4';
        echo '</div>';
    }
}
?>