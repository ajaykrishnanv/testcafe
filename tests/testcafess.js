import {Role, Selector} from 'testcafe';

fixture `Google Title`
    .page `https://sumanas.medizura.com/login`;
    
    test('My first test', async t => {
        await t.typeText('input[type="text"]','ajay')
        .typeText('input[type="password"]','123456')
        .click('button[class="btn btn-block btn-lg btn-info"]')
        .wait(3000)
        .navigateTo('https://sumanas.medizura.com/pharmacy/create-sale')
        .wait(3000)
        .typeText(Selector('[id="patientName"]'),'p')
        
        .click(Selector('[id="ngb-typeahead-1-1"]'))
        
        .typeText(Selector('[id="doctorName"]'),'t')
        
        .click(Selector('[id="ngb-typeahead-0-1"]'))

        .click(Selector('#main-wrapper label').withText('Credit'))
        .wait(2000)
        .click(Selector('#main-wrapper [class^="form-control custom-select ng-untouched ng-pristin"]').nth(1))
        .wait(2000)
        .click(Selector('#main-wrapper option').withText('MEDIZURA MADURAI'))
        .wait(2000)
        .typeText('#selectProduct0', 'ABOUND')
        .click(Selector('#ngb-typeahead-4-0 span').withText('ABOUND'))
        .click('#selectBatch0')
        .click("option[value='1: Object']")
        .selectText('#saleQty0')
        
        .typeText('#saleQty0', '1')
        
        .click(Selector('#main-wrapper [class^="form-control custom-select font-12 p-l-0 p-r-0 ng-"]').nth(1))
       
        .click(Selector('#main-wrapper option').withText('30049088'))

        .click(Selector('#main-wrapper button').withText('Save').nth(1))
        .click(Selector('#main-wrapper button').withText('View List'))
        .wait(2000)
        .click("body > app-root:nth-child(2) > app-full-width-left:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > app-sales:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ngx-datatable:nth-child(1) > div:nth-child(1) > datatable-body:nth-child(2) > datatable-selection:nth-child(1) > datatable-scroller:nth-child(1) > datatable-row-wrapper:nth-child(2) > datatable-body-row:nth-child(1) > div:nth-child(2) > datatable-body-cell:nth-child(1) > div:nth-child(1) > a:nth-child(1) > i:nth-child(1)")
        .wait(2000)
        .click("body > app-root:nth-child(2) > app-full-width-left:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > app-sales:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ngx-datatable:nth-child(1) > div:nth-child(1) > datatable-body:nth-child(2) > datatable-selection:nth-child(1) > datatable-scroller:nth-child(1) > datatable-row-wrapper:nth-child(2) > div:nth-child(2) > div:nth-child(1) > ngx-datatable:nth-child(1) > div:nth-child(1) > datatable-body:nth-child(2) > datatable-selection:nth-child(1) > datatable-scroller:nth-child(1) > datatable-row-wrapper:nth-child(2) > datatable-body-row:nth-child(1) > div:nth-child(2) > datatable-body-cell:nth-child(6) > div:nth-child(1) > a:nth-child(1) > i:nth-child(1)")
        .wait(2000)
        .typeText(Selector('[id="saleQty0"]'),'0')
        .wait(2000)
        .click("button[class='btn btn-success']")
        .wait(2000)
        .click("body > app-root:nth-child(2) > app-full-width-left:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > app-sales:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ngx-datatable:nth-child(1) > div:nth-child(1) > datatable-body:nth-child(2) > datatable-selection:nth-child(1) > datatable-scroller:nth-child(1) > datatable-row-wrapper:nth-child(2) > datatable-body-row:nth-child(1) > div:nth-child(2) > datatable-body-cell:nth-child(1) > div:nth-child(1) > a:nth-child(1) > i:nth-child(1)")
        .wait(2000)
        .click("body > app-root:nth-child(2) > app-full-width-left:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > app-sales:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ngx-datatable:nth-child(1) > div:nth-child(1) > datatable-body:nth-child(2) > datatable-selection:nth-child(1) > datatable-scroller:nth-child(1) > datatable-row-wrapper:nth-child(2) > div:nth-child(2) > div:nth-child(1) > ngx-datatable:nth-child(1) > div:nth-child(1) > datatable-body:nth-child(2) > datatable-selection:nth-child(1) > datatable-scroller:nth-child(1) > datatable-row-wrapper:nth-child(7) > datatable-body-row:nth-child(1) > div:nth-child(2) > datatable-body-cell:nth-child(6) > div:nth-child(1) > a:nth-child(3) > i:nth-child(1)")
        .wait(2000)
        .click("body > ngb-modal-window:nth-child(11) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)")
        .wait(2000)
            .navigateTo('https://sumanas.medizura.com/pharmacy/create-purchase')
           .typeText(Selector('[id="InvoiceNo"]'),'ME0000021')
        //    .typeText(Selector('input[placeholder="Invoice Date"]'),'19-11-2021')
           .wait(2000)
           .click("select[name='supplier_id']")
           .click(Selector('#main-wrapper option').withText('TAMILANNAI SIDDHA HOSPITAL'))
           .wait(2000)
           .typeText('#selectProduct0','ABDIFER')
       
            .click(Selector('#ngb-typeahead-6-0 span').withText('ABDIFER'))
        //    .typeText('#selectProduct0', 'ABDIFER')
        //    .click(Selector('#ngb-typeahead-5-0 span').withText('ABDIFER'))



});


    

