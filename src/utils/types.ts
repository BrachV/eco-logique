export type SwitchConfig = {
    id: number,
    name: string,
    in_mode: string,
    initial_state: string,
    auto_on: boolean,
    auto_on_delay: number,
    auto_off: boolean,
    auto_off_delay: number,
    autorecover_voltage_errors: boolean,
    power_limit: number,
    voltage_limit: number,
    undervoltage_limit: number,
    current_limit: number
}

export type SwitchStatus = {
    id: number,
    source: string,
    output: boolean,
    apower: number,
    voltage: number,
    current: number,
    aenergy: {
      total: number,
      by_minute: [
        number,
        number,
        number
      ],
      minute_ts: number
    },
    temperature: {
      tC: number,
      tF: number
    }
}

export type SystemConfig = {
    device: {
      name: string | null,
      mac: string,
      fw_id: string,
      eco_mode: boolean,
      profile: string,
      discoverable: boolean
    },
    location: {
      tz: string,
      lat: number,
      lon: number
    },
    debug: {
      mqtt: {
        enable: boolean
      },
      websocket: {
        enable: boolean
      },
      udp: {
        addr: unknown
      }
    },
    ui_data: {},
    rpc_udp: {
      dst_addr: string | null,
      listen_port: string | null
    },
    sntp: {
      server: string
    },
    cfg_rev: number
}

export type SystemStatus = {
    mac: string,
    restart_required: boolean,
    time: string,
    unixtime: number,
    uptime: number,
    ram_size: number,
    ram_free: number,
    fs_size: number,
    fs_free: number,
    cfg_rev: number,
    kvs_rev: number,
    schedule_rev: number,
    webhook_rev: number,
    available_updates: {
      stable: {
        version: string
      }
    }
}

export type UIConfig = {
    leds: {
      mode: "power",
      colors: {
        "switch:0": {
          on: {
            rgb: [
              number,
              number,
              number
            ],
            brightness: number
          },
          off: {
            rgb: [
                number,
                number,
                number
            ],
            brightness: number
          }
        },
        power: {
          brightness: number
        }
      },
      night_mode: {
        enable: false,
        brightness: number,
        active_between: [
          string, // après 22:00 
          string // jusqu'à 06:00
        ]
      }
    },
    controls: {
      "switch:0": {
        in_mode: "momentary"
      }
    }
}