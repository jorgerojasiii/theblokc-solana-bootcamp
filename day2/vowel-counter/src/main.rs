fn main() {
    let my_str = "taalga ba"; 
    let values = my_str.chars();
    let mut count = 0;
    //let count = 0;
    for character in values {
        // print!("character: {}", character);
        
        //println!(["a", "e", "i", "o", "u"].contains(&my_str));
        if character == 'a' {
            count += 1;
        }
        if character == 'e' {
            count += 1;
        }
        if character == 'i' {
            count += 1;
        }
        if character == 'o' {
            count += 1;
        }
        if character == 'u' {
            count += 1;
        }

    }
    print!("vowel count: {}", count)
}
    
