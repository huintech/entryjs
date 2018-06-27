
'use strict'

var EntryStatic = {};

EntryStatic.objectTypes = [
    "sprite",
    "textBox"
]

EntryStatic.usageList = [
   'usage_sequence' , 'usage_repeat', 'usage_condition_repeat', 'usage_condition', 'usage_parallel', 'usage_event',
   'usage_signal', 'usage_random', 'usage_variable', 'usage_ask_answer' , 'usage_comp_operation', 'usage_math_operation',
   'usage_logical_operation' , 'usage_list', 'usage_function', 'usage_arrow_move', 'usage_coordinate', 'usage_rotation', 'usage_speak',
   'usage_picture_effect', 'usage_shape', 'usage_sound', 'usage_draw','usage_confirm', 'usage_timer', 'usage_textBox', 'usage_scene',
   'usage_clone', 'usage_hw'
];

EntryStatic.conceptList = [
    'concept_resource_analytics', 'concept_individual', 'concept_abstractive','concept_procedual',
     'concept_automation', 'concept_simulation', 'concept_parallel'
];

EntryStatic.subjectList = [
    'subject_korean', 'subject_mathmatics',  'subject_social',
    'subject_science', 'subject_english', 'subject_courtesy','subject_music', 'subject_paint',
    'subject_athletic',  'subject_progmatic'
];

EntryStatic.lectureLevels=[1,2,3];

// EntryStatic.lectureLevels = ['level_high', 'level_mid','level_row'];

EntryStatic.lectureGrades = [
    'e_1', 'e_2', 'e_3', 'e_4', 'e_5', 'e_6',
    'm_1', 'm_2', 'm_3',
    'general'
];

EntryStatic.categoryList = [
    'category_game', 'category_animation', 'category_media_art',
    'category_physical', 'category_etc'
];

EntryStatic.variableBlockList = [
    "get_variable",
    "change_variable",
    "set_variable",
    "show_variable",
    "hide_variable",
    "value_of_index_from_list",
    "add_value_to_list",
    "remove_value_from_list",
    "insert_value_to_list",
    "change_value_list_index",
    "length_of_list",
    "is_included_in_list",
    "show_list",
    "hide_list",
];

EntryStatic.messageBlockList = [
    "when_message_cast",
    "message_cast",
    "message_cast_wait",
];

EntryStatic.requiredTimes = [1,2,3,4,5];

EntryStatic.searchProjectOption = [
   {
       'key':'search_updated',
       'lang':'search_updated',
       'value': 'updated'
   },
   {
       'key':'search_recent',
       'lang':'search_recent',
       'value': 'recent'
   },
   {
       'key':'search_complexity',
       'lang':'search_complexity',
       'value':'complexity'
   },
   {
       'key':'search_staffPicked',
       'lang':'search_staffPicked',
       'value': 'staffPicked'
   },
   {
       'key':'search_childCnt',
       'lang':'search_childCnt',
       'value': 'childCnt'
   },
   {
       'key':'search_likeCnt',
       'lang':'search_likeCnt',
       'value': 'recentLikeCnt'
   }
]

EntryStatic.categoryProjectOption = [
   {
       'key':'search_genre_all',
       'lang':'search_전체',
       'value': '전체'
   },
   {
       'key':'search_genre_game',
       'lang':'search_게임',
       'value': '게임'
   },
   {
       'key':'search_genre_animation',
       'lang':'search_애니메이션',
       'value': '애니메이션'
   },
   {
       'key':'search_genre_media',
       'lang':'search_미디어아트',
       'value': '미디어아트'
   },
   {
       'key':'search_genre_physical',
       'lang':'search_피지컬',
       'value': '피지컬'
   },
   {
       'key':'search_genre_etc',
       'lang':'search_기타',
       'value': '기타'
   }
]

EntryStatic.getAllBlocks = function() {
    return [
        {
            category: "start",
            blocks: [
                "when_run_button_click",
                "when_some_key_pressed",
                "mouse_clicked",
                "mouse_click_cancled",
                "when_object_click",
                "when_object_click_canceled",
                "when_message_cast",
                "message_cast",
                "message_cast_wait",
                "when_scene_start",
                "start_scene",
                "start_neighbor_scene",
                "check_object_property",
                "check_block_execution",
                "switch_scope",
                "is_answer_submited",
                "check_lecture_goal",
                "check_variable_by_name",
                "show_prompt",
                "check_goal_success",
                "positive_number",
                "negative_number",
                "wildcard_string",
                "wildcard_boolean",
                "register_score"
            ]
        },
        {
            category: "flow",
            blocks: [
                "wait_second",
                "repeat_basic",
                "repeat_inf",
                "repeat_while_true",
                "stop_repeat",
                "_if",
                "if_else",
                "wait_until_true",
                "stop_object",
                "restart_project",
                "when_clone_start",
                "create_clone",
                "delete_clone",
                "remove_all_clones"
            ]
        },
        {
            category: "moving",
            blocks: [
                "move_direction",
                "bounce_wall",
                "move_x",
                "move_y",
                "move_xy_time",
                "locate_x",
                "locate_y",
                "locate_xy",
                "locate_xy_time",
                "locate",
                "locate_object_time",
                "rotate_relative",
                "direction_relative",
                "rotate_by_time",
                "direction_relative_duration",
                "rotate_absolute",
                "direction_absolute",
                "see_angle_object",
                "move_to_angle"
            ]
        },
        {
            category: "looks",
            blocks: [
                "show",
                "hide",
                "dialog_time",
                "dialog",
                "remove_dialog",
                "change_to_some_shape",
                "change_to_next_shape",
                "add_effect_amount",
                "change_effect_amount",
                "erase_all_effects",
                "change_scale_size",
                "set_scale_size",
                "flip_x",
                "flip_y",
                "change_object_index"
            ]
        },
        {
            category: "brush",
            blocks: [
                "brush_stamp",
                "start_drawing",
                "stop_drawing",
                "set_color",
                "set_random_color",
                "change_thickness",
                "set_thickness",
                "change_brush_transparency",
                "set_brush_tranparency",
                "brush_erase_all"
            ]
        },
        {
            category: "text",
            blocks: [
                "text_read",
                "text_write",
                "text_append",
                "text_prepend",
                "text_flush"
            ]
        },
        {
            category: "sound",
            blocks: [
                "sound_something_with_block",
                "sound_something_second_with_block",
                "sound_from_to",
                "sound_something_wait_with_block",
                "sound_something_second_wait_with_block",
                "sound_from_to_and_wait",
                "sound_volume_change",
                "sound_volume_set",
                "sound_silent_all"
            ]
        },
        {
            category: "judgement",
            blocks: [
                "is_clicked",
                "is_press_some_key",
                "reach_something",
                "boolean_basic_operator",
                "boolean_and_or",
                "boolean_not"
            ]
        },
        {
            category: "calc",
            blocks: [
                "calc_basic",
                "calc_rand",
                "coordinate_mouse",
                "coordinate_object",
                "get_sound_volume",
                "quotient_and_mod",
                "calc_operation",
                "get_project_timer_value",
                "choose_project_timer_action",
                "set_visible_project_timer",
                "get_date",
                "distance_something",
                "get_sound_duration",
                "get_user_name",
                "length_of_string",
                "combine_something",
                "char_at",
                "substring",
                "index_of_string",
                "replace_string",
                "change_string_case"
            ]
        },
        {
            category: "variable",
            blocks: [
                "variableAddButton",
                "listAddButton",
                "ask_and_wait",
                "get_canvas_input_value",
                "set_visible_answer",
                "get_variable",
                "change_variable",
                "set_variable",
                "show_variable",
                "hide_variable",
                "value_of_index_from_list",
                "add_value_to_list",
                "remove_value_from_list",
                "insert_value_to_list",
                "change_value_list_index",
                "length_of_list",
                "is_included_in_list",
                "show_list",
                "hide_list"
            ]
        },
        {
            category: "func",
            blocks: [
                "functionAddButton",
            ]
        },
        {
            category: "expansion",
            blocks: [
                "expansionBlockAddButton",
                "weather_title",
                "check_weather",
                "check_finedust",
                "get_weather_data",
                "get_current_weather_data",
                "get_today_temperature"
            ]
        },
        {
            category: "arduino",
            blocks: [
                "arduino_download_connector",
                "download_guide",
                "arduino_download_source",
                "arduino_connected",
                "arduino_connect",
                "arduino_reconnect",
                "arduino_open",
                "arduino_cloud_pc_open",
                "arduino_get_number_sensor_value",
                "arduino_get_digital_value",
                "arduino_toggle_led",
                "arduino_toggle_pwm",
                "arduino_convert_scale",
                //arduinoExt
                "arduino_ext_get_analog_value",
                "arduino_ext_get_analog_value_map",
                "arduino_ext_get_ultrasonic_value",
                "arduino_ext_get_digital",
                "arduino_ext_toggle_led",
                "arduino_ext_digital_pwm",
                "arduino_ext_set_servo",
                "arduino_ext_set_tone",
                //codingBox
                "cbx_read_line",
                "cbx_read_mic",
                "cbx_read_switch",
                "cbx_read_potentiometer",
                "cbx_read_ultrasonic",
                "cbx_write_led",
                "cbx_write_rgb_led",
                "cbx_write_tone",
                "cbx_write_dcm",
                "cbx_write_servo",
                "cbx_write_lcd",
                "cbx_clear_lcd",
                "cbx_arduino_get_analog_value",
                "cbx_arduino_get_analog_value_map",
                "cbx_arudino_read_ultrasonic_value",
                "cbx_arduino_read_digital",
                "cbx_arduino_toggle_led",
                "cbx_arduino_digital_pwm",
                "cbx_arduino_write_servo",
                "cbx_arduino_write_tone",
                //arduinoNano
                "arduino_nano_get_analog_value",
                "arduino_nano_get_analog_value_map",
                "arduino_nano_get_ultrasonic_value",
                "arduino_nano_get_digital",
                "arduino_nano_toggle_led",
                "arduino_nano_digital_pwm",
                "arduino_nano_set_servo",
                "arduino_nano_set_tone",
                //blacksmith
                "blacksmith_get_analog_value",
                "blacksmith_get_analog_mapping",
                "blacksmith_get_digital_bluetooth",
                "blacksmith_get_digital_ultrasonic",
                "blacksmith_get_digital_toggle",
                "blacksmith_set_digital_toggle",
                "blacksmith_set_digital_pwm",
                "blacksmith_set_digital_servo",
                "blacksmith_set_digital_buzzer",
                "blacksmith_set_digital_lcd",
                "blacksmith_set_digital_bluetooth",
                //joystick
                "joystick_get_number_sensor_value",
                "joystick_get_digital_value",
                "joystick_toggle_led",
                "joystick_toggle_pwm",
                "joystick_convert_scale",
                //dplay
                "dplay_get_number_sensor_value",
                "dplay_get_value",
                "dplay_get_gas_sensor_value",
                "dplay_get_dust_sensor_value",
                "dplay_get_CO2_sensor_value",
                "dplay_convert_scale",
                "dplay_get_digital_value",
                "dplay_get_switch_status",
                "dplay_get_tilt",
                "dplay_toggle_led",
                "dplay_toggle_pwm",
                "dplay_select_led",
                "dplay_DCmotor",
                "dplay_DCmotor_speed",
                "dplay_buzzer",
                "dplay_servo",
                "dplay_Robot_run",
                "dplay_Robot_run_sec",
                "dplay_robot_speed_sel",
                "dplay_robot_speed_set",
                "dplay_robot_stop",
                //iboard
                "iboard_tmp",
				"iboard_var_res",
				"iboard_cds",
				"iboard_mic",
				"iboard_button",
				"iboard_led",
				"iboard_rgb_led",
				"iboard_pwm_led",
				"iboard_set_tone",
				"iboard_motor",
				"iboard_get_analog_value",
				"iboard_get_analog_value_map",
				"iboard_get_digital",
				"iboard_toggle_led",
                "iboard_digital_pwm",
                //nemoino
                "nemoino_get_named_sensor_value",
                "nemoino_get_sound_status",
                "nemoino_is_button_pressed",
                "nemoino_get_accelerometer_direction",
                "nemoino_get_accelerometer_value",
                "nemoino_get_number_sensor_value",
                "nemoino_get_digital_value",
                "nemoino_toggle_led",
                "nemoino_toggle_pwm",
                "nemoino_convert_scale",
                //neobot
                "neobot_sensor_value",
                "neobot_sensor_convert_scale",
                "neobot_equal_with_sensor",
                "neobot_boolean_equal",
                "neobot_left_motor",
                "neobot_stop_left_motor",
                "neobot_right_motor",
                "neobot_stop_right_motor",
                "neobot_all_motor",
                "neobot_all_motor_iternally",
                "neobot_stop_all_motor",
                "neobot_set_servo",
                "neobot_set_output",
                "neobot_set_fnd",
                "neobot_set_fnd_off",
                "neobot_play_note_for",
                "neobot_play_note_with_sensor",
                "neobot_change_color_with_color_picker",
                "neobot_change_color_with_sensor_value",
                "bitbrick_sensor_value",
                "bitbrick_convert_scale",
                "bitbrick_is_touch_pressed",
                "bitbrick_turn_off_color_led",
                "bitbrick_turn_on_color_led_by_rgb",
                "bitbrick_turn_on_color_led_by_picker",
                "bitbrick_turn_on_color_led_by_value",
                "bitbrick_buzzer",
                "bitbrick_turn_off_all_motors",
                "bitbrick_dc_speed",
                "bitbrick_dc_direction_speed",
                "bitbrick_servomotor_angle",
                "cobl_read_ultrason",
                "cobl_read_potenmeter",
                "cobl_read_irread1",
                "cobl_read_irread2",
                "cobl_read_joyx",
                "cobl_read_joyy",
                //"cobl_read_sens1",
                //"cobl_read_sens2",
                "cobl_read_tilt",
                "cobl_read_temps",
                "cobl_read_light",
                "cobl_read_btn",
                "cobl_led_control",
                "cobl_rgb_boardled",
                "cobl_servo_angle_control",
                "cobl_melody",
                "cobl_dcmotor",
                "cobl_extention_port",
                "cobl_external_RainBowled",
                "cobl_external_led",
                "cobl_7_segment",
                "hamster_hand_found",
                "hamster_value",
                "hamster_move_forward_once",
                "hamster_turn_once",
                "hamster_move_forward_for_secs",
                "hamster_move_backward_for_secs",
                "hamster_turn_for_secs",
                "hamster_change_both_wheels_by",
                "hamster_set_both_wheels_to",
                "hamster_change_wheel_by",
                "hamster_set_wheel_to",
                "hamster_follow_line_using",
                "hamster_follow_line_until",
                "hamster_set_following_speed_to",
                "hamster_stop",
                "hamster_set_led_to",
                "hamster_clear_led",
                "hamster_beep",
                "hamster_change_buzzer_by",
                "hamster_set_buzzer_to",
                "hamster_clear_buzzer",
                "hamster_play_note_for",
                "hamster_rest_for",
                "hamster_change_tempo_by",
                "hamster_set_tempo_to",
                "hamster_set_port_to",
                "hamster_change_output_by",
                "hamster_set_output_to",
                "turtle_touching_color",
                "turtle_is_color_pattern",
                "turtle_button_state",
                "turtle_value",
                "turtle_move_forward_unit",
                "turtle_move_backward_unit",
                "turtle_turn_unit_in_place",
                "turtle_turn_unit_with_radius_in_direction",
                "turtle_pivot_around_wheel_unit_in_direction",
                "turtle_change_wheels_by_left_right",
                "turtle_set_wheels_to_left_right",
                "turtle_change_wheel_by",
                "turtle_set_wheel_to",
                "turtle_follow_line",
                "turtle_follow_line_until",
                "turtle_follow_line_until_black",
                "turtle_cross_intersection",
                "turtle_turn_at_intersection",
                "turtle_set_following_speed_to",
                "turtle_stop",
                "turtle_set_head_led_to",
                "turtle_change_head_led_by_rgb",
                "turtle_set_head_led_to_rgb",
                "turtle_clear_head_led",
                "turtle_play_sound_times",
                "turtle_play_sound_times_until_done",
                "turtle_change_buzzer_by",
                "turtle_set_buzzer_to",
                "turtle_clear_sound",
                "turtle_play_note",
                "turtle_play_note_for_beats",
                "turtle_rest_for_beats",
                "turtle_change_tempo_by",
                "turtle_set_tempo_to",
                "roboid_hamster_hand_found",
                "roboid_hamster_value",
                "roboid_hamster_move_forward_once",
                "roboid_hamster_turn_once",
                "roboid_hamster_move_forward_for_secs",
                "roboid_hamster_move_backward_for_secs",
                "roboid_hamster_turn_for_secs",
                "roboid_hamster_change_both_wheels_by",
                "roboid_hamster_set_both_wheels_to",
                "roboid_hamster_change_wheel_by",
                "roboid_hamster_set_wheel_to",
                "roboid_hamster_follow_line_using",
                "roboid_hamster_follow_line_until",
                "roboid_hamster_set_following_speed_to",
                "roboid_hamster_stop",
                "roboid_hamster_set_led_to",
                "roboid_hamster_clear_led",
                "roboid_hamster_beep",
                "roboid_hamster_change_buzzer_by",
                "roboid_hamster_set_buzzer_to",
                "roboid_hamster_clear_buzzer",
                "roboid_hamster_play_note_for",
                "roboid_hamster_rest_for",
                "roboid_hamster_change_tempo_by",
                "roboid_hamster_set_tempo_to",
                "roboid_hamster_set_port_to",
                "roboid_hamster_change_output_by",
                "roboid_hamster_set_output_to",
                "roboid_turtle_touching_color",
                "roboid_turtle_is_color_pattern",
                "roboid_turtle_button_state",
                "roboid_turtle_value",
                "roboid_turtle_move_forward_unit",
                "roboid_turtle_move_backward_unit",
                "roboid_turtle_turn_unit_in_place",
                "roboid_turtle_turn_unit_with_radius_in_direction",
                "roboid_turtle_pivot_around_wheel_unit_in_direction",
                "roboid_turtle_change_wheels_by_left_right",
                "roboid_turtle_set_wheels_to_left_right",
                "roboid_turtle_change_wheel_by",
                "roboid_turtle_set_wheel_to",
                "roboid_turtle_follow_line",
                "roboid_turtle_follow_line_until",
                "roboid_turtle_follow_line_until_black",
                "roboid_turtle_cross_intersection",
                "roboid_turtle_turn_at_intersection",
                "roboid_turtle_set_following_speed_to",
                "roboid_turtle_stop",
                "roboid_turtle_set_head_led_to",
                "roboid_turtle_change_head_led_by_rgb",
                "roboid_turtle_set_head_led_to_rgb",
                "roboid_turtle_clear_head_led",
                "roboid_turtle_play_sound_times",
                "roboid_turtle_play_sound_times_until_done",
                "roboid_turtle_change_buzzer_by",
                "roboid_turtle_set_buzzer_to",
                "roboid_turtle_clear_sound",
                "roboid_turtle_play_note",
                "roboid_turtle_play_note_for_beats",
                "roboid_turtle_rest_for_beats",
                "roboid_turtle_change_tempo_by",
                "roboid_turtle_set_tempo_to",
                "albert_hand_found",
                "albert_is_oid_value",
                "albert_value",
                "albert_move_forward_for_secs",
                "albert_move_backward_for_secs",
                "albert_turn_for_secs",
                "albert_change_both_wheels_by",
                "albert_set_both_wheels_to",
                "albert_change_wheel_by",
                "albert_set_wheel_to",
                "albert_stop",
                "albert_set_pad_size_to",
                "albert_move_to_x_y_on_board",
                "albert_set_orientation_on_board",
                "albert_set_eye_to",
                "albert_clear_eye",
                "albert_body_led",
                "albert_front_led",
                "albert_beep",
                "albert_change_buzzer_by",
                "albert_set_buzzer_to",
                "albert_clear_buzzer",
                "albert_play_note_for",
                "albert_rest_for",
                "albert_change_tempo_by",
                "albert_set_tempo_to",
                //sensorBoard
                "sensorBoard_get_named_sensor_value",
                "sensorBoard_is_button_pressed",
                "sensorBoard_led",
                "sensorBoard_get_number_sensor_value",
                "sensorBoard_get_digital_value",
                "sensorBoard_toggle_led",
                "sensorBoard_toggle_pwm",
                "sensorBoard_convert_scale",
                //truetrue
                "truetrue_get_linesensor",
                "truetrue_get_proxisensor",
                "truetrue_get_accsensor",
                "truetrue_get_bottomcolorsensor",
                "truetrue_get_frontcolorsensor",
                "truetrue_set_singlemotor",
                "truetrue_set_dualmotor",
                "truetrue_set_colorled",
                "truetrue_set_led_proxi",
                "truetrue_set_led_colorsensor",
                "truetrue_set_led_linesensor",
                "truetrue_set_linetracer",
                //CODEino
                "CODEino_get_named_sensor_value",
                "CODEino_get_sound_status",
                "CODEino_get_light_status",
                "CODEino_is_button_pressed",
                "CODEino_get_accelerometer_direction",
                "CODEino_get_accelerometer_value",
                //"CODEino_get_number_sensor_value",
                "CODEino_get_digital_value",
                //"CODEino_toggle_led",
                //"CODEino_toggle_pwm",
                "CODEino_convert_scale",
                //2016-09-23
                "CODEino_get_analog_value",
                "CODEino_set_digital_value",
                "CODEino_set_pwm_value",
                "CODEino_led_by_value",
                "CODEino_set_rgb_off",
                "CODEino_set__led_by_rgb",
                "CODEino_rgb_set_color",
                "CODEino_set_rgb_value",
                "CODEino_set_rgb_add_value",
                //robotis_openCM70
                "robotis_openCM70_sensor_value",
                "robotis_openCM70_aux_sensor_value",
                "robotis_openCM70_cm_buzzer_index",
                "robotis_openCM70_cm_buzzer_melody",
                "robotis_openCM70_cm_sound_detected_clear",
                "robotis_openCM70_cm_led",
                "robotis_openCM70_cm_motion",
                "robotis_openCM70_aux_motor_speed",
                "robotis_openCM70_aux_servo_mode",
                "robotis_openCM70_aux_servo_speed",
                "robotis_openCM70_aux_servo_position",
                "robotis_openCM70_aux_led_module",
                "robotis_openCM70_aux_custom",
                "robotis_openCM70_cm_custom_value",
                "robotis_openCM70_cm_custom",
                "robotis_carCont_sensor_value",
                "robotis_carCont_cm_led",
                "robotis_carCont_cm_sound_detected_clear",
                "robotis_carCont_aux_motor_speed",
                "robotis_carCont_aux_motor_speed2",
                "robotis_carCont_cm_calibration",

                //XBOT Blocks added
                "xbot_analogValue",
                "xbot_digitalInput",
                "xbot_digitalOutput",
                "xbot_analogOutput",
                "xbot_rgb",
                "xbot_rgb_picker",
                "xbot_buzzer",
                "xbot_servo",
                "xbot_oneWheel",
                "xbot_twoWheel",
                "xbot_lcd",
                //end of XBOT Blocks added
                // ardublock Added 2016-06-01
                "ardublock_get_analog_value",
                "ardublock_get_analog_value_map",
                "ardublock_get_ultrasonic_value",
                "ardublock_get_digital",
                "ardublock_toggle_led",
                "ardublock_digital_pwm",
                "ardublock_set_servo",
                "ardublock_set_tone",
                "ardublock_set_left_motor",
                "ardublock_set_right_motor",
                "ardublock_get_left_cds_analog_value",
                "ardublock_get_right_cds_analog_value",
                "ardublock_toggle_left_led",
                "ardublock_toggle_right_led",
                "ardublock_get_sound_analog_value",
                // ardublock Added 2016-06-01

                // mkboard Added 2017-07-04
                "mkboard_get_analog_value",
                "mkboard_get_analog_value_map",
                "mkboard_get_ultrasonic_value",
                "mkboard_get_digital",
                "mkboard_toggle_led",
                "mkboard_digital_pwm",
                "mkboard_set_servo",
                "mkboard_set_tone",
                "mkboard_set_lcd",
                "mkboard_lcd_command",
                // mkboard Added 2017-07-04

                "ev3_get_sensor_value",
                "ev3_touch_sensor",
                "ev3_color_sensor",
                "ev3_motor_power",
                "ev3_motor_power_on_time",
                "ev3_motor_degrees",

                "roduino_on_block",
                "roduino_off_block",
                "roduino_get_analog_value",
                "roduino_get_digital_value",
                "roduino_get_color",
                "roduino_set_digital",
                "roduino_motor",
                "roduino_set_color_pin",

                "schoolkit_on_block",
                "schoolkit_off_block",
                "schoolkit_get_input_value",
                "schoolkit_set_output",
                "schoolkit_motor",
                "schoolkit_set_servo_value",

                // codestar 2016-09-26
                'codestar_color_single',
                'codestar_3color',
                'codestar_vibration',
                'codestar_buzzer',
                'codestar_buzzer_stop',
                'codestar_drive',
                'codestar_wheel',
                'codestar_light',
                'codestar_button',
                'codestar_ir',
                'codestar_sonar',
                'codestar_mic',
                'codestar_temperature',
                'codestar_tilt',


                //koreasci.com chocopi
                'chocopi_sensor',
                'chocopi_touch_event',
                'chocopi_touch_status',
                'chocopi_touch_value',
                'chocopi_control_event',
                'chocopi_control_joystick',
                'chocopi_control_button',
                'chocopi_motion_photogate_event',
                'chocopi_motion_photogate_time',
                'chocopi_motion_photogate_status',
                'chocopi_motion_value',
                'chocopi_led',
                'chocopi_dc_motor',
                'chocopi_servo_motor',

                //jeil science smartBoard. 2016-11-03
                //smartBoard
                "smartBoard_get_named_sensor_value",
                "smartBoard_convert_scale",
                "smartBoard_is_button_pressed",
                "smartBoard_set_dc_motor_direction",
                "smartBoard_set_dc_motor_speed",
                "smartBoard_set_dc_motor_pwm",
                "smartBoard_set_servo_speed",
                "smartBoard_set_servo_angle",
                "smartBoard_set_number_eight_pin",
                "smartBoard_set_gs1_pwm",

                //robotori Add 20161129 begin
                "robotori_digitalInput",
                "robotori_analogInput",
                "robotori_digitalOutput",
                "robotori_analogOutput",
                "robotori_servo",
                "robotori_dc_direction",
                //robotori add 20161129 end

                //dadublock 2016-12-19
                "dadublock_get_analog_value",
                "dadublock_get_analog_value_map",
                "dadublock_get_ultrasonic_value",
                "dadublock_get_digital",
                "dadublock_toggle_led",
                "dadublock_digital_pwm",
                "dadublock_set_servo",
                "dadublock_set_tone",

                //dadublock_car
                "dadublock_car_get_analog_value",
                "dadublock_car_get_analog_value_map",
                "dadublock_car_get_ultrasonic_value",
                "dadublock_car_get_digital",
                "dadublock_car_toggle_led",
                "dadublock_car_digital_pwm",
                "dadublock_car_set_servo",
                "dadublock_car_set_tone",
                "dadublock_car_motor_stop",
                "dadublock_car_motor",
                "dadublock_car_get_irsensor",

                // BYROBOT - DroneFighter Controller
                "byrobot_dronefighter_controller_controller_value_button",
                "byrobot_dronefighter_controller_controller_value_joystick",
                "byrobot_dronefighter_controller_controller_if_button_press",
                "byrobot_dronefighter_controller_controller_if_joystick_direction",
                "byrobot_dronefighter_controller_controller_light_manual_single_off",
                "byrobot_dronefighter_controller_controller_light_manual_single",
                "byrobot_dronefighter_controller_controller_light_manual_single_input",
                "byrobot_dronefighter_controller_controller_buzzer_off",
                "byrobot_dronefighter_controller_controller_buzzer_scale",
                "byrobot_dronefighter_controller_controller_buzzer_scale_delay",
                "byrobot_dronefighter_controller_controller_buzzer_scale_reserve",
                "byrobot_dronefighter_controller_controller_buzzer_hz",
                "byrobot_dronefighter_controller_controller_buzzer_hz_delay",
                "byrobot_dronefighter_controller_controller_buzzer_hz_reserve",
                "byrobot_dronefighter_controller_controller_vibrator_off",
                "byrobot_dronefighter_controller_controller_vibrator_on_delay",
                "byrobot_dronefighter_controller_controller_vibrator_on_reserve",
                "byrobot_dronefighter_controller_controller_vibrator_delay",
                "byrobot_dronefighter_controller_controller_vibrator_reserve",
                "byrobot_dronefighter_controller_controller_userinterface_preset",
                "byrobot_dronefighter_controller_controller_userinterface",

                // BYROBOT - DroneFighter Drive
                "byrobot_dronefighter_drive_drone_value_attitude",
                "byrobot_dronefighter_drive_drone_value_etc",
                "byrobot_dronefighter_drive_controller_value_button",
                "byrobot_dronefighter_drive_controller_value_joystick",
                "byrobot_dronefighter_drive_controller_if_button_press",
                "byrobot_dronefighter_drive_controller_if_joystick_direction",
                "byrobot_dronefighter_drive_drone_control_car_stop",
                "byrobot_dronefighter_drive_drone_control_double_one",
                "byrobot_dronefighter_drive_drone_control_double_one_delay",
                "byrobot_dronefighter_drive_drone_control_double",
                "byrobot_dronefighter_drive_drone_motor_stop",
                "byrobot_dronefighter_drive_drone_motorsingle",
                "byrobot_dronefighter_drive_drone_motorsingle_input",
                "byrobot_dronefighter_drive_drone_irmessage",
                "byrobot_dronefighter_drive_drone_light_manual_single_off",
                "byrobot_dronefighter_drive_drone_light_manual_single",
                "byrobot_dronefighter_drive_drone_light_manual_single_input",
                "byrobot_dronefighter_drive_controller_light_manual_single_off",
                "byrobot_dronefighter_drive_controller_light_manual_single",
                "byrobot_dronefighter_drive_controller_light_manual_single_input",
                "byrobot_dronefighter_drive_controller_buzzer_off",
                "byrobot_dronefighter_drive_controller_buzzer_scale",
                "byrobot_dronefighter_drive_controller_buzzer_scale_delay",
                "byrobot_dronefighter_drive_controller_buzzer_scale_reserve",
                "byrobot_dronefighter_drive_controller_buzzer_hz",
                "byrobot_dronefighter_drive_controller_buzzer_hz_delay",
                "byrobot_dronefighter_drive_controller_buzzer_hz_reserve",
                "byrobot_dronefighter_drive_controller_vibrator_off",
                "byrobot_dronefighter_drive_controller_vibrator_on_delay",
                "byrobot_dronefighter_drive_controller_vibrator_on_reserve",
                "byrobot_dronefighter_drive_controller_vibrator_delay",
                "byrobot_dronefighter_drive_controller_vibrator_reserve",

                // BYROBOT - DroneFighter Flight
                "byrobot_dronefighter_flight_drone_value_attitude",
                "byrobot_dronefighter_flight_drone_value_etc",
                "byrobot_dronefighter_flight_controller_value_button",
                "byrobot_dronefighter_flight_controller_value_joystick",
                "byrobot_dronefighter_flight_controller_if_button_press",
                "byrobot_dronefighter_flight_controller_if_joystick_direction",
                "byrobot_dronefighter_flight_drone_control_drone_stop",
                "byrobot_dronefighter_flight_drone_control_coordinate",
                "byrobot_dronefighter_flight_drone_control_drone_reset_heading",
                "byrobot_dronefighter_flight_drone_control_quad_one",
                "byrobot_dronefighter_flight_drone_control_quad_one_delay",
                "byrobot_dronefighter_flight_drone_control_quad",
                "byrobot_dronefighter_flight_drone_motor_stop",
                "byrobot_dronefighter_flight_drone_motorsingle",
                "byrobot_dronefighter_flight_drone_motorsingle_input",
                "byrobot_dronefighter_flight_drone_irmessage",
                "byrobot_dronefighter_flight_drone_light_manual_single_off",
                "byrobot_dronefighter_flight_drone_light_manual_single",
                "byrobot_dronefighter_flight_drone_light_manual_single_input",
                "byrobot_dronefighter_flight_controller_light_manual_single_off",
                "byrobot_dronefighter_flight_controller_light_manual_single",
                "byrobot_dronefighter_flight_controller_light_manual_single_input",
                "byrobot_dronefighter_flight_controller_buzzer_off",
                "byrobot_dronefighter_flight_controller_buzzer_scale",
                "byrobot_dronefighter_flight_controller_buzzer_scale_delay",
                "byrobot_dronefighter_flight_controller_buzzer_scale_reserve",
                "byrobot_dronefighter_flight_controller_buzzer_hz",
                "byrobot_dronefighter_flight_controller_buzzer_hz_delay",
                "byrobot_dronefighter_flight_controller_buzzer_hz_reserve",
                "byrobot_dronefighter_flight_controller_vibrator_off",
                "byrobot_dronefighter_flight_controller_vibrator_on_delay",
                "byrobot_dronefighter_flight_controller_vibrator_on_reserve",
                "byrobot_dronefighter_flight_controller_vibrator_delay",
                "byrobot_dronefighter_flight_controller_vibrator_reserve",

                // BYROBOT - PetroneV2 Controller
                "byrobot_petrone_v2_controller_controller_value_button",
                "byrobot_petrone_v2_controller_controller_value_joystick",
                "byrobot_petrone_v2_controller_controller_if_button_press",
                "byrobot_petrone_v2_controller_controller_if_joystick_direction",
                "byrobot_petrone_v2_controller_controller_light_manual_single_off",
                "byrobot_petrone_v2_controller_controller_light_manual_single",
                "byrobot_petrone_v2_controller_controller_light_manual_single_input",
                "byrobot_petrone_v2_controller_controller_light_color_rgb_input",
                "byrobot_petrone_v2_controller_controller_light_color_rgb_select",
                "byrobot_petrone_v2_controller_controller_display_clear_all",
                "byrobot_petrone_v2_controller_controller_display_clear",
                "byrobot_petrone_v2_controller_controller_display_invert",
                "byrobot_petrone_v2_controller_controller_display_draw_point",
                "byrobot_petrone_v2_controller_controller_display_draw_line",
                "byrobot_petrone_v2_controller_controller_display_draw_rect",
                "byrobot_petrone_v2_controller_controller_display_draw_circle",
                "byrobot_petrone_v2_controller_controller_display_draw_string",
                "byrobot_petrone_v2_controller_controller_display_draw_string_align",
                "byrobot_petrone_v2_controller_controller_buzzer_off",
                "byrobot_petrone_v2_controller_controller_buzzer_scale",
                "byrobot_petrone_v2_controller_controller_buzzer_scale_delay",
                "byrobot_petrone_v2_controller_controller_buzzer_scale_reserve",
                "byrobot_petrone_v2_controller_controller_buzzer_hz",
                "byrobot_petrone_v2_controller_controller_buzzer_hz_delay",
                "byrobot_petrone_v2_controller_controller_buzzer_hz_reserve",
                "byrobot_petrone_v2_controller_controller_vibrator_off",
                "byrobot_petrone_v2_controller_controller_vibrator_on_delay",
                "byrobot_petrone_v2_controller_controller_vibrator_on_reserve",
                "byrobot_petrone_v2_controller_controller_vibrator_delay",
                "byrobot_petrone_v2_controller_controller_vibrator_reserve",

                // BYROBOT - PetroneV2 Drive
                "byrobot_petrone_v2_drive_drone_value_attitude",
                "byrobot_petrone_v2_drive_drone_value_imu",
                "byrobot_petrone_v2_drive_drone_value_sensor",
                "byrobot_petrone_v2_drive_drone_value_etc",
                "byrobot_petrone_v2_drive_controller_value_button",
                "byrobot_petrone_v2_drive_controller_value_joystick",
                "byrobot_petrone_v2_drive_controller_if_button_press",
                "byrobot_petrone_v2_drive_controller_if_joystick_direction",
                "byrobot_petrone_v2_drive_drone_command_mode_vehicle_car",
                "byrobot_petrone_v2_drive_drone_control_car_stop",
                "byrobot_petrone_v2_drive_drone_control_double_one",
                "byrobot_petrone_v2_drive_drone_control_double_one_delay",
                "byrobot_petrone_v2_drive_drone_control_double",
                "byrobot_petrone_v2_drive_drone_control_double_delay",
                "byrobot_petrone_v2_drive_drone_motor_stop",
                "byrobot_petrone_v2_drive_drone_motorsingle",
                "byrobot_petrone_v2_drive_drone_motorsingle_input",
                "byrobot_petrone_v2_drive_drone_motorsingle_rotation",
                "byrobot_petrone_v2_drive_drone_irmessage",
                "byrobot_petrone_v2_drive_drone_light_manual_single_off",
                "byrobot_petrone_v2_drive_drone_light_manual_single",
                "byrobot_petrone_v2_drive_drone_light_manual_single_input",
                "byrobot_petrone_v2_drive_drone_light_color_rgb_input",
                "byrobot_petrone_v2_drive_drone_light_color_rgb_select",
                "byrobot_petrone_v2_drive_controller_light_manual_single_off",
                "byrobot_petrone_v2_drive_controller_light_manual_single",
                "byrobot_petrone_v2_drive_controller_light_manual_single_input",
                "byrobot_petrone_v2_drive_controller_light_color_rgb_input",
                "byrobot_petrone_v2_drive_controller_light_color_rgb_select",
                "byrobot_petrone_v2_drive_controller_display_clear_all",
                "byrobot_petrone_v2_drive_controller_display_clear",
                "byrobot_petrone_v2_drive_controller_display_invert",
                "byrobot_petrone_v2_drive_controller_display_draw_point",
                "byrobot_petrone_v2_drive_controller_display_draw_line",
                "byrobot_petrone_v2_drive_controller_display_draw_rect",
                "byrobot_petrone_v2_drive_controller_display_draw_circle",
                "byrobot_petrone_v2_drive_controller_display_draw_string",
                "byrobot_petrone_v2_drive_controller_display_draw_string_align",
                "byrobot_petrone_v2_drive_controller_buzzer_off",
                "byrobot_petrone_v2_drive_controller_buzzer_scale",
                "byrobot_petrone_v2_drive_controller_buzzer_scale_delay",
                "byrobot_petrone_v2_drive_controller_buzzer_scale_reserve",
                "byrobot_petrone_v2_drive_controller_buzzer_hz",
                "byrobot_petrone_v2_drive_controller_buzzer_hz_delay",
                "byrobot_petrone_v2_drive_controller_buzzer_hz_reserve",
                "byrobot_petrone_v2_drive_controller_vibrator_off",
                "byrobot_petrone_v2_drive_controller_vibrator_on_delay",
                "byrobot_petrone_v2_drive_controller_vibrator_on_reserve",
                "byrobot_petrone_v2_drive_controller_vibrator_delay",
                "byrobot_petrone_v2_drive_controller_vibrator_reserve",

                // BYROBOT - PetroneV2 Flight
                "byrobot_petrone_v2_flight_drone_value_attitude",
                "byrobot_petrone_v2_flight_drone_value_imu",
                "byrobot_petrone_v2_flight_drone_value_sensor",
                "byrobot_petrone_v2_flight_drone_value_etc",
                "byrobot_petrone_v2_flight_controller_value_button",
                "byrobot_petrone_v2_flight_controller_value_joystick",
                "byrobot_petrone_v2_flight_controller_if_button_press",
                "byrobot_petrone_v2_flight_controller_if_joystick_direction",
                "byrobot_petrone_v2_flight_drone_command_mode_vehicle_drone",
                "byrobot_petrone_v2_flight_drone_control_drone_takeoff",
                "byrobot_petrone_v2_flight_drone_control_drone_landing",
                "byrobot_petrone_v2_flight_drone_control_drone_stop",
                "byrobot_petrone_v2_flight_drone_control_coordinate",
                "byrobot_petrone_v2_flight_drone_control_drone_reset_heading",
                "byrobot_petrone_v2_flight_drone_control_quad_one",
                "byrobot_petrone_v2_flight_drone_control_quad_one_delay",
                "byrobot_petrone_v2_flight_drone_control_quad",
                "byrobot_petrone_v2_flight_drone_control_quad_delay",
                "byrobot_petrone_v2_flight_drone_motor_stop",
                "byrobot_petrone_v2_flight_drone_motorsingle",
                "byrobot_petrone_v2_flight_drone_motorsingle_input",
                "byrobot_petrone_v2_flight_drone_motorsingle_rotation",
                "byrobot_petrone_v2_flight_drone_irmessage",
                "byrobot_petrone_v2_flight_drone_light_manual_single_off",
                "byrobot_petrone_v2_flight_drone_light_manual_single",
                "byrobot_petrone_v2_flight_drone_light_manual_single_input",
                "byrobot_petrone_v2_flight_drone_light_color_rgb_input",
                "byrobot_petrone_v2_flight_drone_light_color_rgb_select",
                "byrobot_petrone_v2_flight_controller_light_manual_single_off",
                "byrobot_petrone_v2_flight_controller_light_manual_single",
                "byrobot_petrone_v2_flight_controller_light_manual_single_input",
                "byrobot_petrone_v2_flight_controller_light_color_rgb_input",
                "byrobot_petrone_v2_flight_controller_light_color_rgb_select",
                "byrobot_petrone_v2_flight_controller_display_clear_all",
                "byrobot_petrone_v2_flight_controller_display_clear",
                "byrobot_petrone_v2_flight_controller_display_invert",
                "byrobot_petrone_v2_flight_controller_display_draw_point",
                "byrobot_petrone_v2_flight_controller_display_draw_line",
                "byrobot_petrone_v2_flight_controller_display_draw_rect",
                "byrobot_petrone_v2_flight_controller_display_draw_circle",
                "byrobot_petrone_v2_flight_controller_display_draw_string",
                "byrobot_petrone_v2_flight_controller_display_draw_string_align",
                "byrobot_petrone_v2_flight_controller_buzzer_off",
                "byrobot_petrone_v2_flight_controller_buzzer_scale",
                "byrobot_petrone_v2_flight_controller_buzzer_scale_delay",
                "byrobot_petrone_v2_flight_controller_buzzer_scale_reserve",
                "byrobot_petrone_v2_flight_controller_buzzer_hz",
                "byrobot_petrone_v2_flight_controller_buzzer_hz_delay",
                "byrobot_petrone_v2_flight_controller_buzzer_hz_reserve",
                "byrobot_petrone_v2_flight_controller_vibrator_off",
                "byrobot_petrone_v2_flight_controller_vibrator_on_delay",
                "byrobot_petrone_v2_flight_controller_vibrator_on_reserve",
                "byrobot_petrone_v2_flight_controller_vibrator_delay",
                "byrobot_petrone_v2_flight_controller_vibrator_reserve",

                //MODI
                "modi_microphone_value",
                "modi_environment_value",
                "modi_dial_value",
                "modi_gyroscope_value",
                "modi_button_value",
                "modi_button_true",
                "modi_button_false",
                "modi_infrared_value",
                "modi_ultrasonic_value",
                "modi_set_motor_value",
                "modi_change_motor_upper_value",
                "modi_change_motor_bottom_value",
                "modi_clear_led",
                "modi_set_led_rgb",
                "modi_set_led_color",
                "modi_set_basic_speaker",
                "modi_set_custom_speaker",
                "modi_print_display_by_value",

                // COCONUT
                "coconut_move_motor",
                "coconut_turn_motor",
                "coconut_stop_motor",
                "coconut_move_for_secs",
                "coconut_turn_for_secs",
                "coconut_turn_to_led",
                "coconut_move_outmotor",
                "coconut_set_led_to",
                "coconut_clear_led",
                "coconut_set_led_clear",
                "coconut_set_led_time",
                "coconut_beep",
                "coconut_buzzer_time",
                "coconut_buzzer_set_hz",
                "coconut_clear_buzzer",
                "coconut_play_buzzer",
                "coconut_rest_buzzer",
                "coconut_play_buzzer_led",
                "coconut_play_midi",
                "coconut_floor_sensor",
                "coconut_floor_sensing",
                "coconut_following_line",
                "coconut_front_sensor",
                "coconut_front_sensing",
                "coconut_obstruct_sensing",
                "coconut_avoid_mode",
                "coconut_dotmatrix_set",
                "coconut_dotmatrix_on",
                "coconut_dotmatrix_off",
                "coconut_dotmatrix_num",
                "coconut_dotmatrix_small_eng",
                "coconut_dotmatrix_big_eng",
                "coconut_dotmatrix_kor",
                "coconut_light_sensor",
                "coconut_light_tmp",
                "coconut_ac_sensor",
                "coconut_outled_sensor",
                "coconut_outspk_sensor",
                "coconut_outspk_sensor_off",
                "coconut_outinfrared_sensor",
                "coconut_outcds_sensor",
                "coconut_servomotor_angle",
                //rokoboard Blocks
                "rokoboard_get_sensor_value_by_name",
                "rokoboard_is_button_pressed",
                 //Altino Blocks added
                "altino_analogValue",
                "altino_rear_wheel",
                "altino_steering",
                "altino_sound",
                "altino_light",
                "altino_dot_display",
                "altino_dot_display_line",
                //JDKit Blocks
                "jdkit_led",
                "jdkit_tune",
                "jdkit_motor",
                "jdkit_joystick",
                "jdkit_button",
                "jdkit_gyro",
                "jdkit_ultrasonic",
                "jdkit_connect",
                "jdkit_ready",
                "jdkit_throttle",
                "jdkit_altitude",
                "jdkit_rollpitch",
                "jdkit_yaw",
                "jdkit_emergency",
                // memaker Added 2017-10-01
                "memaker_get_analog_value",
                "memaker_get_analog_value_map",
                "memaker_get_ultrasonic_value",
                "memaker_get_digital",
                "memaker_toggle_led",
                "memaker_digital_pwm",
                "memaker_set_servo",
                "memaker_set_lcd",
                "memaker_lcd_command",
                // memaker Added 2017-10-01

                //hummingbirdduo
                "hummingbird_sensorValue",
                "hummingbird_temperatureValue",
                "hummingbird_lightValue",
                "hummingbird_distanceValue",
                "hummingbird_rotaryValue",
                "hummingbird_soundValue",
                "hummingbird_vibeMotor",
                "hummingbird_servo",
                "hummingbird_dcMotor",
                "hummingbird_triLED",
                "hummingbird_led",

                // EduMaker Added 2017-11-30
                "edumaker_get_analog_value",
                "edumaker_get_analog_value_map",
                "edumaker_get_ultrasonic_value",
                "edumaker_get_digital",
                "edumaker_toggle_led",
                "edumaker_digital_pwm",
                "edumaker_set_tone",
                "edumaker_set_servo",
                // EduMaker Added 2017-11-30

		        // playcode Added 2018-01-02
                "playcode_get_light_value",
                "playcode_get_mic_value",
                "playcode_gpio",
                "playcode_servo",
                "playcode_speed",
                // playcode Added 2018-01-02

                //creamo
                "creamo_toggle_led",
                "creamo_get_number_sensor_value",
                "creamo_toggle_pwm",
                "creamo_toggle_motor",
                //creamo
                // mechatro Added 2018-02-12
                "mechatro_set_threshold",
                "mechatro_get_digital",
                "mechatro_get_sensor_value",
                "mechatro_get_dc_motor_current",
                "mechatro_get_ultrasonic_value",
                "mechatro_set_digital",
                "mechatro_set_pwm",
                "mechatro_set_tone",
                "mechatro_set_tone_time",
                "mechatro_set_dc_motor",
                "mechatro_set_servo_position",
                "mechatro_set_servo_speed",
                "mechatro_set_blue_pw",
                // mechatro Added 2018-02-12

                //FunBoard
                "funboard_list_pushbutton_basic",
                "funboard_list_touchbutton_basic",
                "funboard_list_analogsensor_basic",
                "funboard_list_2_state_basic",
                "funboard_list_ledcolor_basic",
                "funboard_list_onoff_basic",
                "funboard_what_button_pressed",
                "funboard_what_touch_button_pressed",
                "funboard_get_analog_sensor_2state",
                "funboard_get_digital_button_value",
                "funboard_get_touch_button_value",
                "funboard_get_number_sensor_value",
                "funboard_convert_scale",
                "funboard_set_digital_buzzer",
                "funboard_buzzer_onoff",
                "funboard_color_led_onoff",
                "funboard_color_led_on_pwm",
                "funboard_dotmatrix_intensity",
                "funboard_dotmatrix_onoff",
                "funboard_dotmatrix_symbol",
                "funboard_dotmatrix_char_display",
                "funboard_dotmatrix_string_display_scroll",
                "funboard_dotmatrix_set",
                "funboard_dotmatrix_1row",
                "funboard_dotmatrix_1column",

                //region microbit
                "microbit_led_toggle",
                "microbit_get_led",
                "microbit_show_string",
                "microbit_show_image",
                "microbit_get_analog",
                "microbit_get_analog_map",
                "microbit_get_digital",
                "microbit_get_button",
                "microbit_get_sensor",
                "microbit_get_accelerometer",
                "microbit_play_note",
                "microbit_change_bpm",
                "microbit_set_bpm",
                // "microbit_radio_receive_event",
                //endregion microbit
            ]
        }
    ]
}

EntryStatic.discussCategories = [
   // 'notice',
   'qna',
   'tips',
    'free',
   'report',
   'notice',
];

EntryStatic.artCategories = [
    {
        'key':'art_category_',
        'lang':'art_category_all',
        'value': ''
    },
    {
        'key':'art_category_게임',
        'lang':'art_category_game',
        'value': '게임'
    },
    {
        'key':'art_category_애니메이션',
        'lang':'art_category_animation',
        'value':'애니메이션'
    },
    {
        'key':'art_category_미디어아트',
        'lang':'art_category_media',
        'value': '미디어아트'
    },
    {
        'key':'art_category_피지컬',
        'lang':'art_category_physical',
        'value': '피지컬'
    },
    {
        'key':'art_category_기타',
        'lang':'art_category_etc',
        'value': '기타'
    }
]

EntryStatic.artSortOptions = [
    {
        'key':'art_sort_updated',
        'lang':'art_sort_updated',
        'value': 'updated'
    },
    {
        'key':'art_sort_visit',
        'lang':'art_sort_visit',
        'value': 'visit'
    },
    {
        'key':'art_sort_likeCnt',
        'lang':'art_sort_likeCnt',
        'value': 'likeCnt'
    },
    {
        'key':'art_sort_comment',
        'lang':'art_sort_comment',
        'value': 'comment'
    },
]

EntryStatic.discussSortOptions = [
    {
        'lang':'discuss_sort_created',
        'value': 'created'
    },
    {
        'lang':'discuss_sort_visit',
        'value': 'visit'
    },
    {
        'lang':'discuss_sort_likesLength',
        'value': 'likesLength'
    },
    {
        'lang':'discuss_sort_commentsLength',
        'value': 'commentsLength'
    },
]
EntryStatic.discussPeriodOptions = [
    {
        'key':'discuss_period_',
        'lang':'discuss_period_all',
        'value': ''
    },
    {
        'key':'discuss_period_1',
        'lang':'discuss_period_day',
        'value': '1'
    },
    {
        'key':'discuss_period_7',
        'lang':'discuss_period_week',
        'value': '7'
    },
    {
        'key':'discuss_period_30',
        'lang':'discuss_period_month',
        'value': '30'
    },
    {
        'key':'discuss_period_90',
        'lang':'discuss_period_three_month',
        'value': '90'
    },
]


EntryStatic.artPeriodOptions = [
    {
        'key':'art_period_',
        'lang':'art_period_all',
        'value': ''
    },
    {
        'key':'art_period_1',
        'lang':'art_period_day',
        'value': '1'
    },
    {
        'key':'art_period_7',
        'lang':'art_period_week',
        'value': '7'
    },
    {
        'key':'art_period_30',
        'lang':'art_period_month',
        'value': '30'
    },
    {
        'key':'art_period_90',
        'lang':'art_period_three_month',
        'value': '90'
    }
]

EntryStatic.getCategoryByBlock = function(blockName) {
    if (!blockName)
        return false;
    var allBlocks = EntryStatic.getAllBlocks();
    for (var i=0,len=allBlocks.length; i<len; i++) {
        var blocks = allBlocks[i].blocks;
        if (blocks.indexOf(blockName) > -1) {
            return allBlocks[i].category;
        }
    }
    return false;
}

EntryStatic.objectMainCategories = ['entrybot_friends', 'people', 'animal', 'plant', 'vehicles',
                'architect', 'food', 'environment', 'stuff', 'fantasy', 'interface',
                'background'];

EntryStatic.objectSubCategories = {
    'entrybot_friends': [],
    'people': [],
    'animal': ['animal_flying', 'animal_land', 'animal_water', 'animal_others'],
    'plant': ['plant_flower', 'plant_grass', 'plant_tree', 'plant_others'],
    'vehicles': ['vehicles_flying', 'vehicles_land', 'vehicles_water', 'vehicles_others'],
    'architect': ['architect_building', 'architect_monument', 'architect_others'],
    'food': ['food_vegetables', 'food_meat', 'food_drink', 'food_others'],
    'environment': ['environment_nature', 'environment_space', 'environment_others'],
    'stuff': ['stuff_living', 'stuff_hobby', 'stuff_others'],
    'fantasy': [],
    'interface': [],
    'background': ['background_outdoor', 'background_indoor', 'background_nature', 'background_others']
};

EntryStatic.fonts = [
{
    name: Lang.Fonts.batang,
    family: 'KoPub Batang',
    url: '/css/kopubbatang.css'
},
{
    name: Lang.Fonts.myeongjo,
    family: 'Nanum Myeongjo',
    url: '/css/nanummyeongjo.css'
},
{
    name: Lang.Fonts.gothic,
    family: 'Nanum Gothic',
    url: '/css/nanumgothic.css'
},
{
    name: Lang.Fonts.pen_script,
    family: 'Nanum Pen Script',
    url: '/css/nanumpenscript.css'
},
{
    name: Lang.Fonts.jeju_hallasan,
    family: 'Jeju Hallasan',
    url: '/css/jejuhallasan.css'
},
{
    name: Lang.Fonts.gothic_coding,
    family: 'Nanum Gothic Coding',
    url: '/css/nanumgothiccoding.css'
}
];

EntryStatic.ARROW_COLOR_START = '#2f975a';
EntryStatic.ARROW_COLOR_FLOW = '#3a71bc';
EntryStatic.ARROW_COLOR_MOVING = '#8641b6';
EntryStatic.ARROW_COLOR_LOOKS = '#d8234e';
EntryStatic.ARROW_COLOR_TEXT = '#dc9c32';
EntryStatic.ARROW_COLOR_SOUNDS = '#83a617';
EntryStatic.ARROW_COLOR_JUDGE = '#89a1f7';
EntryStatic.ARROW_COLOR_CALC = '#e8b349';
EntryStatic.ARROW_COLOR_VARIABLE = '#ce38ce';
EntryStatic.ARROW_COLOR_HW = '#097e84';
EntryStatic.ARROW_COLOR_EXPANSION = '#ff8888';


EntryStatic.COMMAND_TYPES = {
    addThread: 101,
    destroyThread: 102,
    destroyBlock: 103,
    recoverBlock: 104,
    insertBlock: 105,
    separateBlock: 106,
    moveBlock: 107,
    cloneBlock: 108,
    uncloneBlock: 109,
    scrollBoard: 110,
    setFieldValue: 111,

    selectObject: 201,

    'do': 301,
    'undo': 302,
    'redo': 303
};

EntryStatic.getQuestionCategoryData = function() {
    return {
        category: 'dummy',
        blocks: [
            'hidden_event',
            'hidden',
            'hidden_string',
            'hidden_boolean'
        ]
    }
};

// for server node js code
if (typeof exports == "object") {
    exports.blockInfo = EntryStatic.blockInfo;
    exports.getAllBlocks = EntryStatic.getAllBlocks;
    exports.getCategoryByBlock = EntryStatic.getCategoryByBlock;
    exports.EntryStatic = EntryStatic;
}
