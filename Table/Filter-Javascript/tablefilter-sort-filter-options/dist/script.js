var tfConfig = {
    // instruct TableFilter location to import ressources from
    base_path: 'https://unpkg.com/tablefilter@latest/dist/tablefilter/',
    col_0: 'multiple',
    col_3: 'checklist',
    col_4: 'checklist',
    col_5: 'select',
    col_6: 'multiple',
    col_7: 'checklist',
    col_8: 'checklist', 
    filters_row_index: 1,
    alternate_rows: true,
    rows_counter: true,
    btn_reset: true,
    loader: true,
    status_bar: true,
    col_types: [
        'string',
        'string',
        'string',
        { type: 'formatted-number', decimal: ',', thousands: '.' },
        'formatted-number', // defaults to '.' for decimal and ',' for thousands
        'string',
        { type: 'date', locale: 'fr' },
        { type: 'date', locale: 'en', format: '{dd}-{MM}-{yyyy|yy}' },
        { type: 'date', format: ['{dd}.{MM}.{yyyy}'] },
        'ipaddress'
    ],
    // optional as filter options are sorted
    // in ascending manner by default
    // sort_filter_options_asc: [0, 3, 6],
    sort_filter_options_desc: [4, 5, 7],
    col_widths: [
      '150px', '75px', '90px',
      '110px', '110px', '175px',
      '120px', '120px', '120px',
      '*'
    ],
    extensions:[{ 
      name: 'sort',
      images_path: 'https://unpkg.com/tablefilter@latest/dist/tablefilter/style/themes/' 
    }]
};

var tf = new TableFilter('demo-tot', tfConfig);
tf.init();