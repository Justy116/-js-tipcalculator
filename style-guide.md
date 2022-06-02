# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Strong cyan: hsl(172, 67%, 45%)

### Neutral

- Very dark cyan: hsl(183, 100%, 15%)
- Dark grayish cyan: hsl(186, 14%, 43%)
- Grayish cyan: hsl(184, 14%, 56%)
- Light grayish cyan: hsl(185, 41%, 84%)
- Very light grayish cyan: hsl(189, 41%, 97%)
- White: hsl(0, 0%, 100%)

## Typography

### Body Copy

- Font size (form inputs): 24px

### Font

- Family: [Space Mono](https://fonts.google.com/specimen/Space+Mono)
- Weights: 700




     1)contenitore main principale class="container"
	
	1.2) 1 div sx
		1.2.1) 1 div class="bill__form"
			a. <h4>Bill</h4>
			b. 1 div class="input__form"
			c. simbolo $
			d. input form type=number
1.2.2) 1 div class="TipPercentage"
			a. <h4>Select Tip %</h4>
			b. 1 div class="percentageButton"
				b.2) appendere Array da JS
				b.1) input form type=number placeholder="Custom"
1.2.3) 1 div class="Number__Of__People__form"
			a. <h4>Number of People</h4>
			b. 1 div class="input__form"
				b.1) simbolo persona
				b.2) input form type=number	
1.3) 1 div dx
			1.3.1) 1 div class="tip__amount"
				a. 1 div class="description"
					a.1) <h4> Tip Amount <h4>
					a.2) <p> / person </p>
				b. <span id="tipOut"> $0.00 </span>
			1.3.2) 1 div class="total"
				a. 1 div class="description"
					a.1) <h4> Total <h4>
					a.2) <p> / person </p>
				b. <span id="totalOut"> $0.00 </span>
			1.3.3) 1 div class="reset__Btn"
				a. <button> Reset </button> 
